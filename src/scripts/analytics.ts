/**
 * Analytics Tracking System
 * 
 * Sistema modular y agnóstico para tracking de eventos
 * No envía datos a servidores, solo captura y almacena localmente
 * Preparado para conectar a: Plausible, GA4, Posthog, Mixpanel, etc.
 */

export interface TrackingEvent {
  type: string;
  section?: string;
  action?: string;
  label?: string;
  value?: string | number;
  url?: string;
  timestamp: number;
  sessionId: string;
  metadata?: Record<string, any>;
}

export interface ScrollMetrics {
  maxScrollDepth: number;
  timeOnPage: number;
  sectionsViewed: string[];
  lastScrollTime: number;
}

export class Analytics {
  private sessionId: string;
  private events: TrackingEvent[] = [];
  private scrollMetrics: ScrollMetrics;
  private pageStartTime: number;
  private debug: boolean = true;
  private storageKey = 'portfolio_analytics_session';
  private maxStoredEvents = 100;

  // Scroll tracking
  private maxScrollDepth = 0;
  private sectionsViewed = new Set<string>();
  private lastScrollTime = Date.now();

  constructor(debug: boolean = true) {
    this.debug = debug;
    this.sessionId = this.generateSessionId();
    this.pageStartTime = Date.now();
    this.scrollMetrics = {
      maxScrollDepth: 0,
      timeOnPage: 0,
      sectionsViewed: [],
      lastScrollTime: this.pageStartTime,
    };

    this.log('Analytics initialized', {
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * Genera un ID único de sesión (UUID v4 simple)
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
  }

  /**
   * Rastrear evento genérico
   */
  trackEvent(
    type: string,
    action?: string,
    label?: string,
    metadata?: Record<string, any>
  ): void {
    const event: TrackingEvent = {
      type,
      action,
      label,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      url: typeof window !== 'undefined' ? window.location.href : '',
      metadata,
    };

    this.events.push(event);
    this.persistEvent(event);

    this.log(`Event tracked: ${type}`, {
      action,
      label,
      metadata,
    });
  }

  /**
   * Track pageview
   */
  trackPageView(page: string): void {
    this.trackEvent('pageview', 'view', page, {
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    });
  }

  /**
   * Track click en elemento
   */
  trackClick(target: HTMLElement, category: string = 'interaction'): void {
    const label = target.textContent?.substring(0, 50) || target.id || 'unknown';
    const href = (target as HTMLAnchorElement).href || '';
    const projectId = target.closest('[data-project-id]')?.getAttribute('data-project-id');

    this.trackEvent('click', category, label, {
      href,
      tagName: target.tagName,
      id: target.id,
      class: target.className,
      projectId: projectId || undefined,
    });
  }

  /**
   * Track click específico en proyecto
   */
  trackProjectClick(projectId: string, projectName: string, action: string = 'click'): void {
    this.trackEvent('project_interaction', action, projectName, {
      projectId,
      timestamp: Date.now(),
    });
  }

  /**
   * Track scroll depth
   */
  trackScrollDepth(scrollPercentage: number): void {
    if (scrollPercentage > this.maxScrollDepth) {
      this.maxScrollDepth = scrollPercentage;
      this.scrollMetrics.maxScrollDepth = scrollPercentage;

      // Log hitos importantes
      if (scrollPercentage === 25 || scrollPercentage === 50 || scrollPercentage === 75 || scrollPercentage === 100) {
        this.trackEvent('scroll_milestone', 'scroll', `${scrollPercentage}%`, {
          depth: scrollPercentage,
        });
      }
    }
  }

  /**
   * Track sección vista
   */
  trackSectionView(sectionId: string): void {
    if (!this.sectionsViewed.has(sectionId)) {
      this.sectionsViewed.add(sectionId);
      this.scrollMetrics.sectionsViewed = Array.from(this.sectionsViewed);

      this.trackEvent('section_view', 'view', sectionId, {
        sectionId,
        viewCount: this.sectionsViewed.size,
      });
    }
  }

  /**
   * Track tiempo en página/sección
   */
  trackTimeSpent(label: string, seconds: number): void {
    this.trackEvent('time_spent', 'duration', label, {
      seconds,
      milliseconds: seconds * 1000,
    });
  }

  /**
   * Track enlace externo
   */
  trackExternalLink(url: string, label: string = 'external_link'): void {
    this.trackEvent('external_link', 'click', label, {
      url,
      domain: this.extractDomain(url),
    });
  }

  /**
   * Track llamada a acción
   */
  trackCTA(ctaText: string, action: string = 'click'): void {
    this.trackEvent('cta_interaction', action, ctaText, {
      timestamp: Date.now(),
    });
  }

  /**
   * Obtener métricas de scroll actual
   */
  getScrollMetrics(): ScrollMetrics {
    return {
      ...this.scrollMetrics,
      timeOnPage: Math.round((Date.now() - this.pageStartTime) / 1000),
      lastScrollTime: this.lastScrollTime,
    };
  }

  /**
   * Obtener resumen de sesión
   */
  getSessionSummary(): {
    sessionId: string;
    eventCount: number;
    scrollMetrics: ScrollMetrics;
    timeOnPage: number;
    eventsPerSection: Record<string, number>;
  } {
    const eventsPerSection: Record<string, number> = {};
    this.events.forEach(event => {
      const section = event.label || 'unknown';
      eventsPerSection[section] = (eventsPerSection[section] || 0) + 1;
    });

    return {
      sessionId: this.sessionId,
      eventCount: this.events.length,
      scrollMetrics: this.getScrollMetrics(),
      timeOnPage: Math.round((Date.now() - this.pageStartTime) / 1000),
      eventsPerSection,
    };
  }

  /**
   * Obtener todos los eventos (para debugging)
   */
  getEvents(): TrackingEvent[] {
    return [...this.events];
  }

  /**
   * Exportar datos para enviar a servidor
   */
  exportData(): {
    sessionId: string;
    events: TrackingEvent[];
    metrics: ScrollMetrics;
    summary: Record<string, any>;
  } {
    return {
      sessionId: this.sessionId,
      events: this.events,
      metrics: this.getScrollMetrics(),
      summary: this.getSessionSummary(),
    };
  }

  /**
   * Limpiar eventos almacenados
   */
  clearEvents(): void {
    this.events = [];
    this.log('Events cleared');
  }

  /**
   * Persistir evento en localStorage (para debugging)
   */
  private persistEvent(event: TrackingEvent): void {
    try {
      if (typeof localStorage === 'undefined') return;

      const key = `${this.storageKey}_${this.sessionId}`;
      const stored = localStorage.getItem(key);
      let events: TrackingEvent[] = stored ? JSON.parse(stored) : [];

      events.push(event);

      // Mantener último N eventos
      if (events.length > this.maxStoredEvents) {
        events = events.slice(-this.maxStoredEvents);
      }

      localStorage.setItem(key, JSON.stringify(events));
    } catch (error) {
      console.warn('Failed to persist event to localStorage:', error);
    }
  }

  /**
   * Recuperar eventos del localStorage
   */
  static getPersistedSession(sessionId: string): TrackingEvent[] | null {
    try {
      if (typeof localStorage === 'undefined') return null;
      const key = `${this.prototype.storageKey}_${sessionId}`;
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.warn('Failed to retrieve persisted session:', error);
      return null;
    }
  }

  /**
   * Logging interno (solo si debug está activo)
   */
  private log(...args: any[]): void {
    if (!this.debug) return;
    console.log('[Analytics]', ...args);
  }

  /**
   * Extraer dominio de URL
   */
  private extractDomain(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return 'unknown';
    }
  }
}

/**
 * Inicializar analytics global
 */
export function initializeAnalytics(debug: boolean = true): Analytics {
  const analytics = new Analytics(debug);

  // Track page view
  if (typeof window !== 'undefined') {
    analytics.trackPageView(window.location.pathname);

    // Exponer globalmente para debugging
    (window as any).analytics = analytics;
  }

  return analytics;
}
