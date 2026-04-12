// src/scripts/gsap-animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface AnimationConfig {
  prefersReducedMotion?: boolean;
  heroDelay?: number;
  staggerDelay?: number;
  scrollOffset?: string;
}

export class GSAPAnimations {
  private config: Required<AnimationConfig>;

  constructor(config: AnimationConfig = {}) {
    this.config = {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      heroDelay: 0.2,
      staggerDelay: 0.1,
      scrollOffset: 'top 80%',
      ...config
    };
  }

  public init(): void {
    if (this.config.prefersReducedMotion) {
      return; // Skip animations
    }

    this.animateHero();
    this.animateProjects();
    this.animateExperience();
    this.animateStack();
  }

  private animateHero(): void {
    gsap.from('.hero-label', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: this.config.heroDelay,
    });
    gsap.from('.hero-title', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: this.config.heroDelay + 0.2,
    });
    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: this.config.heroDelay + 0.4,
    });
    gsap.from('.hero-cta', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: this.config.heroDelay + 0.6,
    });
    gsap.from('.stat', {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.1,
      delay: this.config.heroDelay + 0.8,
    });
  }

  private animateProjects(): void {
    gsap.utils.toArray('.project-brutal').forEach((project: any, i) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: this.config.scrollOffset,
        },
        opacity: 0,
        x: -50,
        duration: 0.6,
        delay: i * this.config.staggerDelay,
      });
    });
  }

  private animateExperience(): void {
    gsap.utils.toArray('.experience-item').forEach((item: any, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: this.config.scrollOffset,
        },
        opacity: 0,
        x: -50,
        duration: 0.6,
        delay: i * 0.2,
      });
    });
  }

  private animateStack(): void {
    gsap.utils.toArray('.stack-category').forEach((category: any, i) => {
      gsap.from(category, {
        scrollTrigger: {
          trigger: category,
          start: this.config.scrollOffset,
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: i * this.config.staggerDelay,
      });
    });
  }

  public updateConfig(newConfig: Partial<AnimationConfig>): void {
    Object.assign(this.config, newConfig);
  }
}