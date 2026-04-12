// src/scripts/three-scene.ts
import * as THREE from 'three';

export interface ThreeSceneConfig {
  canvasId: string;
  geometryRadius?: number;
  geometryDetail?: number;
  materialColor?: number;
  materialOpacity?: number;
  cameraFov?: number;
  cameraNear?: number;
  cameraFar?: number;
  cameraZ?: number;
  rotationSpeedX?: number;
  rotationSpeedY?: number;
  maxPixelRatio?: number;
  audioUrl?: string;
  audioVolume?: number;
  audioEnabled?: boolean;
      // chillMode removed - always dubstep mode
  audioReactivity?: number;
}

export class ThreeScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private mesh: THREE.Mesh;
  private canvas: HTMLCanvasElement;
  private animationId: number | null = null;
  private config: Required<ThreeSceneConfig>;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private audioSource: MediaElementAudioSourceNode | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private frequencyData: Uint8Array | null = null;
  private timeData: Uint8Array | null = null;
  private originalPositions: Float32Array | null = null;

  constructor(config: ThreeSceneConfig) {
    this.config = {
      geometryRadius: 2,
      geometryDetail: 1,
      materialColor: 0x00ff00,
      materialOpacity: 0.3,
      cameraFov: 75,
      cameraNear: 0.1,
      cameraFar: 1000,
      cameraZ: 5,
      rotationSpeedX: 0.001,
      rotationSpeedY: 0.002,
      maxPixelRatio: 1.5,
      audioUrl: 'https://music.kuraitachi.com/streams/dubstep',
      audioVolume: 0.1,
      audioEnabled: false,
      audioReactivity: 1.2, // More reactive for dubstep
      ...config
    };
  }

  async init(): Promise<void> {
    this.canvas = document.getElementById(this.config.canvasId) as HTMLCanvasElement;
    if (!this.canvas) {
      throw new Error(`Canvas with id ${this.config.canvasId} not found`);
    }

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.config.cameraFov,
      window.innerWidth / window.innerHeight,
      this.config.cameraNear,
      this.config.cameraFar
    );
    this.camera.position.z = this.config.cameraZ;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: false,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.config.maxPixelRatio));

    this.createGeometry();
    this.setupEventListeners();
    if (this.config.audioEnabled) {
      await this.initAudio();
    }
    this.startAnimation();
  }

  private createGeometry(): void {
    const geometry = new THREE.IcosahedronGeometry(
      this.config.geometryRadius,
      this.config.geometryDetail
    );
    const material = new THREE.MeshBasicMaterial({
      color: this.config.materialColor,
      wireframe: true,
      transparent: true,
      opacity: this.config.materialOpacity,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    // Guardar posiciones originales para deformaciones
    this.originalPositions = new Float32Array(geometry.attributes.position.array);
  }

  private async initAudio(): Promise<void> {
    try {
      // Verificar CORS headers primero
      console.log('Checking CORS headers...');
      const corsCheck = await fetch(this.config.audioUrl, {
        method: 'HEAD',
        mode: 'cors'
      }).catch(() => null);

      if (corsCheck) {
        console.log('CORS headers OK');
      } else {
        console.warn('CORS check failed - stream may not allow cross-origin access');
      }

      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.8;

      this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
      this.timeData = new Uint8Array(this.analyser.frequencyBinCount);

      this.audioElement = new Audio();
      this.audioElement.crossOrigin = 'anonymous';
      this.audioElement.src = this.config.audioUrl;
      this.audioElement.volume = this.config.audioVolume;
      this.audioElement.loop = true;
      this.audioElement.preload = 'none'; // Evitar precarga para streams

      // Log detallado para debugging
      this.audioElement.addEventListener('loadstart', () => console.log('🎵 Loading dubstep stream...'));
      this.audioElement.addEventListener('canplay', () => console.log('✅ Dubstep stream ready'));
      this.audioElement.addEventListener('error', (e) => {
        console.error('❌ Dubstep stream error:', e);
        console.log('Stream URL:', this.config.audioUrl);
      });
      this.audioElement.addEventListener('abort', () => console.log('Stream aborted'));
      this.audioElement.addEventListener('stalled', () => console.log('Stream stalled'));
      this.audioElement.addEventListener('suspend', () => console.log('Stream suspended'));

      // Crear source después de que el audio esté listo
      this.audioElement.addEventListener('canplay', () => {
        if (!this.audioSource) {
          try {
            this.audioSource = this.audioContext.createMediaElementSource(this.audioElement);
            this.audioSource.connect(this.analyser);
            this.analyser.connect(this.audioContext.destination);
            console.log('🎛️ Audio analyser connected');
          } catch (sourceError) {
            console.error('Failed to create audio source:', sourceError);
          }
        }
      });

      // Intentar reproducir
      try {
        await this.audioElement.play();
        console.log('🔊 Dubstep streaming successfully');
      } catch (playError) {
        console.warn('🔇 Autoplay blocked, waiting for user interaction:', playError.message);
        this.setupUserInteractionAudio();
      }
    } catch (error) {
      console.error('Audio initialization completely failed:', error);
    }
  }

  private setupUserInteractionAudio(): void {
    const activateAudio = async () => {
      try {
        if (this.audioContext?.state === 'suspended') {
          await this.audioContext.resume();
        }
        if (this.audioElement && !this.audioElement.muted) {
          await this.audioElement.play();
        }
        document.removeEventListener('click', activateAudio);
        document.removeEventListener('touchstart', activateAudio);
        console.log('Audio activated by user interaction');
      } catch (error) {
        console.warn('Failed to activate audio:', error);
      }
    };

    document.addEventListener('click', activateAudio, { once: true });
    document.addEventListener('touchstart', activateAudio, { once: true });
  }

  private setupEventListeners(): void {
    const handleResize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      this.mesh.rotation.z = scrollPercent * Math.PI * 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Store cleanup functions
    this.cleanup = () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }

  private startAnimation(): void {
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);

      // Rotación base
      this.mesh.rotation.x += this.config.rotationSpeedX;
      this.mesh.rotation.y += this.config.rotationSpeedY;

      // Reactividad al audio si está habilitado
      if (this.analyser && this.frequencyData && this.timeData) {
        this.analyser.getByteFrequencyData(this.frequencyData);
        this.analyser.getByteTimeDomainData(this.timeData);

        this.applyAudioDeformation();
      }

      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  private applyAudioDeformation(): void {
    if (!this.mesh.geometry.attributes.position) return;

    const positions = this.mesh.geometry.attributes.position.array;
    const reactivity = this.config.audioReactivity; // Always dubstep mode

    const bassIntensity = this.frequencyData.slice(0, 32).reduce((sum, val) => sum + val, 0) / (32 * 255);
    const timeIntensity = this.timeData.reduce((sum, val) => sum + Math.abs(val - 128), 0) / (this.timeData.length * 128);

    const totalIntensity = (bassIntensity + timeIntensity) * 0.5 * reactivity;

    // Aplicar deformación agresiva para dubstep
    for (let i = 0; i < positions.length; i += 3) {
      const originalX = this.originalPositions[i];
      const originalY = this.originalPositions[i + 1];
      const originalZ = this.originalPositions[i + 2];

      // Deformación radial agresiva basada en audio
      const distance = Math.sqrt(originalX * originalX + originalY * originalY + originalZ * originalZ);
      const direction = {
        x: originalX / distance,
        y: originalY / distance,
        z: originalZ / distance
      };

      // Dubstep: deformación agresiva con múltiples ondas
      const deformation = (Math.sin(totalIntensity * 25 + distance * 6) +
                          Math.cos(totalIntensity * 18 + distance * 4) +
                          Math.sin(totalIntensity * 12 + distance * 2)) * totalIntensity * 1.0;

      positions[i] = originalX + direction.x * deformation;
      positions[i + 1] = originalY + direction.y * deformation;
      positions[i + 2] = originalZ + direction.z * deformation;
    }

    this.mesh.geometry.attributes.position.needsUpdate = true;
  }

  public updateConfig(newConfig: Partial<ThreeSceneConfig>): void {
    Object.assign(this.config, newConfig);
    // Apply changes if needed (e.g., update material color)
    if (newConfig.materialColor !== undefined && this.mesh.material instanceof THREE.MeshBasicMaterial) {
      this.mesh.material.color.setHex(newConfig.materialColor);
    }
    if (newConfig.materialOpacity !== undefined && this.mesh.material instanceof THREE.MeshBasicMaterial) {
      this.mesh.material.opacity = newConfig.materialOpacity;
    }
    // Audio changes
    if (newConfig.audioVolume !== undefined && this.audioElement) {
      this.audioElement.volume = newConfig.audioVolume;
    }
    if (newConfig.audioEnabled !== undefined) {
      this.toggleAudio(newConfig.audioEnabled);
    }
    // Note: chillMode removed, always dubstep reactive
  }

  public toggleAudio(enabled: boolean): void {
    if (!this.audioElement) return;
    if (enabled) {
      this.audioElement.muted = false;
      this.audioElement.play().catch(console.warn);
    } else {
      this.audioElement.muted = true;
    }
  }



  public cleanup: (() => void) | null = null;

  public dispose(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.cleanup) {
      this.cleanup();
    }
    // Audio cleanup
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.src = '';
    }
    if (this.audioContext) {
      this.audioContext.close();
    }
    this.renderer.dispose();
    if (this.mesh.geometry) this.mesh.geometry.dispose();
    if (this.mesh.material) this.mesh.material.dispose();
  }
}