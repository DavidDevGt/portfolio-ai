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
}

export class ThreeScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private mesh: THREE.Mesh;
  private canvas: HTMLCanvasElement;
  private animationId: number | null = null;
  private config: Required<ThreeSceneConfig>;

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
      this.mesh.rotation.x += this.config.rotationSpeedX;
      this.mesh.rotation.y += this.config.rotationSpeedY;
      this.renderer.render(this.scene, this.camera);
    };
    animate();
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
  }

  public cleanup: (() => void) | null = null;

  public dispose(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.cleanup) {
      this.cleanup();
    }
    this.renderer.dispose();
    if (this.mesh.geometry) this.mesh.geometry.dispose();
    if (this.mesh.material) this.mesh.material.dispose();
  }
}