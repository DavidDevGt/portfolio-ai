/**
 * Umami Cloud Analytics Integration
 * 
 * Mapea eventos del sistema local de analytics a Umami Cloud
 * Website ID: 15245736-2d0c-4539-8099-16a502ec5c33
 * 
 * Documentación: https://umami.is/
 */

import type { TrackingEvent } from './analytics';

/**
 * Declarar tipos de Umami
 */
declare global {
  interface Window {
    umami?: {
      track: (name: string, data?: Record<string, any>) => void;
      identify: (data: Record<string, any>) => void;
    };
  }
}

/**
 * Enviar evento a Umami Cloud
 */
export function trackToUmami(eventName: string, eventData?: Record<string, any>): void {
  if (typeof window === 'undefined' || !window.umami) {
    console.warn('[Umami] Not initialized yet');
    return;
  }

  try {
    window.umami.track(eventName, eventData || {});
    console.log(`[Umami] ✅ Event tracked: ${eventName}`, eventData || {});
  } catch (error) {
    console.warn('[Umami] Failed to track event:', error);
  }
}

/**
 * Mapear eventos del sistema local a Umami
 */
export function mapAnalyticsToUmami(event: TrackingEvent): void {
  const { type, action, label, metadata } = event;

  switch (type) {
    // Page view (Umami maneja automáticamente, pero podemos trackear)
    case 'pageview':
      trackToUmami('pageview', {
        page: label,
        referrer: metadata?.referrer,
      });
      break;

    // Scroll depth
    case 'scroll_milestone':
      trackToUmami('scroll_depth', {
        depth: metadata?.depth,
        percentage: `${metadata?.depth}%`,
      });
      break;

    // Project interaction
    case 'project_interaction':
      trackToUmami('project_click', {
        project_id: metadata?.projectId,
        project_name: label,
        action: action, // card_click, view_live_click
      });
      break;

    // Section view
    case 'section_view':
      trackToUmami('section_view', {
        section_id: metadata?.sectionId,
        section_name: label,
        view_count: metadata?.viewCount,
      });
      break;

    // Navigation
    case 'navigation':
      trackToUmami('navigation', {
        section: label,
        url: metadata?.href,
      });
      break;

    // External link click
    case 'external_link':
      trackToUmami('outbound_link', {
        url: metadata?.url,
        domain: metadata?.domain,
        label: label,
      });
      break;

    // CTA clicks
    case 'cta_interaction':
      trackToUmami('cta_click', {
        cta_text: label,
        action: action,
      });
      break;

    // Time spent
    case 'time_spent':
      trackToUmami('time_spent', {
        section: label,
        seconds: metadata?.seconds,
      });
      break;

    // Generic click
    case 'click':
      trackToUmami('click', {
        element: label,
        category: action,
        id: metadata?.id,
      });
      break;

    // Default: track as custom event
    default:
      trackToUmami(`custom_${type}`, {
        action,
        label,
        ...metadata,
      });
  }
}

/**
 * Batch sender para Umami (opcional - para agrupar eventos)
 */
export class UmamiBatcher {
  private queue: TrackingEvent[] = [];
  private batchInterval = 5000; // 5 segundos
  private timer: NodeJS.Timeout | null = null;
  private enabled: boolean = false;

  constructor() {
    // Solo activar batching si Umami está disponible
    if (typeof window !== 'undefined' && window.umami) {
      this.enabled = true;
      this.startBatching();
    }
  }

  addEvent(event: TrackingEvent): void {
    if (!this.enabled) {
      // Si batching no está disponible, enviar inmediatamente
      mapAnalyticsToUmami(event);
      return;
    }

    this.queue.push(event);

    // Si hay muchos eventos, enviar antes
    if (this.queue.length >= 10) {
      this.flush();
    }
  }

  private startBatching(): void {
    this.timer = setInterval(() => {
      if (this.queue.length > 0) {
        this.flush();
      }
    }, this.batchInterval);
  }

  private flush(): void {
    this.queue.forEach(event => mapAnalyticsToUmami(event));
    this.queue = [];
    console.log('[Umami Batcher] ✅ Flushed events');
  }

  stop(): void {
    if (this.timer) clearInterval(this.timer);
    if (this.queue.length > 0) this.flush();
  }
}

/**
 * Identificar usuario (opcional)
 * Útil para rastrear usuarios registrados
 */
export function identifyUserInUmami(userId: string, userData?: Record<string, any>): void {
  if (typeof window === 'undefined' || !window.umami) {
    console.warn('[Umami] Not initialized yet');
    return;
  }

  try {
    window.umami.identify({
      user_id: userId,
      ...userData,
    });
    console.log('[Umami] ✅ User identified:', userId);
  } catch (error) {
    console.warn('[Umami] Failed to identify user:', error);
  }
}

/**
 * Health check: Verificar que Umami esté cargado
 */
export function checkUmamiHealth(): {
  loaded: boolean;
  scriptUrl: string;
  websiteId: string;
} {
  const loaded = typeof window !== 'undefined' && window.umami !== undefined;

  return {
    loaded,
    scriptUrl: 'https://cloud.umami.is/script.js',
    websiteId: '15245736-2d0c-4539-8099-16a502ec5c33',
  };
}

/**
 * Log Umami details (para debugging)
 */
export function logUmamiDetails(): void {
  const health = checkUmamiHealth();
  console.log('═══════════════════════════════════════════');
  console.log('📊 UMAMI ANALYTICS - STATUS');
  console.log('═══════════════════════════════════════════');
  console.log(`✅ Loaded: ${health.loaded ? 'YES' : 'NO'}`);
  console.log(`📍 Website ID: ${health.websiteId}`);
  console.log(`🔗 Script: ${health.scriptUrl}`);

  if (typeof window !== 'undefined') {
    console.log(`🌐 Current URL: ${window.location.href}`);
    console.log(`📄 Page Title: ${document.title}`);
    console.log(`👤 Referrer: ${document.referrer}`);
  }

  console.log('═══════════════════════════════════════════');
  console.log('💡 Test: window.umami.track("test_event", {demo: true})');
  console.log('═══════════════════════════════════════════');
}

/**
 * Preload Umami (llamar lo antes posible)
 */
export function preloadUmami(): void {
  if (typeof document === 'undefined') return;

  // El script ya está en Layout.astro, pero podemos preload
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://cloud.umami.is';
  document.head.appendChild(link);

  console.log('[Umami] Preload initiated');
}
