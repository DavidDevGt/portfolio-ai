import type { Lang } from './ui';

export interface ProjectEntry {
  title: string;
  desc: string;
  stack: string[];
  year: string;
  link?: string;
  metrics?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  status: string;
}

export interface HomeContent {
  projects: ProjectEntry[];
  skills: Record<string, string[]>;
  experience: ExperienceEntry[];
  education: EducationEntry[];
}

const projectsEn: ProjectEntry[] = [
  {
    title: 'Kurai-Transcribe',
    desc: 'Production-grade self-hosted transcription API processing millions of minutes monthly. Custom vocabulary injection, named entity recognition with SpaCy, automatic punctuation restoration. Advanced GPU memory management with semaphore-based VRAM allocation prevents OOM errors. Voice activity detection + Pyannote speaker diarization. Real-time monitoring dashboard with Prometheus metrics.',
    stack: ['Faster-Whisper', 'FastAPI', 'SpaCy', 'CTranslate2', 'Pyannote', 'Prometheus'],
    year: '2026',
    link: 'https://transcribe.kuraitachi.com/',
    metrics: 'RTFx < 0.3, 99.9% uptime',
  },
  {
    title: 'KuraiMusik',
    desc: 'Autonomous content generation system running 24/7 with zero human intervention. Dynamic content buffer system powered by advanced generative AI. Circuit breaker patterns ensure fault tolerance and reliability. Intelligent content orchestration with real-time metadata management and automated scheduling.',
    stack: ['FastAPI', 'Celery', 'Redis', 'ACE-Step', 'PostgreSQL'],
    year: '2026',
    link: 'https://music.kuraitachi.com/',
    metrics: '100% uptime, 500+ hours content',
  },
];

const projectsEs: ProjectEntry[] = [
  {
    title: 'Kurai-Transcribe',
    desc: 'API de transcripción autoalojada de nivel producción que procesa millones de minutos mensuales. Inyección de vocabulario personalizado, reconocimiento de entidades con SpaCy, restauración automática de puntuación. Gestión avanzada de memoria GPU con asignación de VRAM basada en semáforos que previene errores OOM. Detección de actividad de voz + diarización de hablantes con Pyannote. Dashboard de monitoreo en tiempo real con métricas de Prometheus.',
    stack: ['Faster-Whisper', 'FastAPI', 'SpaCy', 'CTranslate2', 'Pyannote', 'Prometheus'],
    year: '2026',
    link: 'https://transcribe.kuraitachi.com/',
    metrics: 'RTFx < 0.3, 99.9% uptime',
  },
  {
    title: 'KuraiMusik',
    desc: 'Sistema autónomo de generación de contenido funcionando 24/7 sin intervención humana. Sistema dinámico de buffer de contenido impulsado por IA generativa avanzada. Patrones circuit breaker que garantizan tolerancia a fallos y confiabilidad. Orquestación inteligente de contenido con gestión de metadatos en tiempo real y programación automatizada.',
    stack: ['FastAPI', 'Celery', 'Redis', 'ACE-Step', 'PostgreSQL'],
    year: '2026',
    link: 'https://music.kuraitachi.com/',
    metrics: '100% uptime, 500+ horas de contenido',
  },
];

const skillsEn: Record<string, string[]> = {
  'Frontend': ['Astro', 'TypeScript', 'JavaScript', 'Three.js', 'GSAP', 'Responsive Design'],
  'Testing & QA': ['Selenium', 'Java', 'API Testing', 'CI/CD', 'Test Automation'],
  'Backend & Infrastructure': ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
  'AI/ML Stack': ['PyTorch', 'CUDA', 'TensorRT', 'MLflow', 'Prometheus'],
};

const skillsEs: Record<string, string[]> = {
  'Frontend': ['Astro', 'TypeScript', 'JavaScript', 'Three.js', 'GSAP', 'Diseño Responsivo'],
  'Testing y QA': ['Selenium', 'Java', 'Testing de APIs', 'CI/CD', 'Automatización de pruebas'],
  'Backend e Infraestructura': ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
  'Stack de IA/ML': ['PyTorch', 'CUDA', 'TensorRT', 'MLflow', 'Prometheus'],
};

const experienceEn: ExperienceEntry[] = [
  {
    role: 'SDET',
    company: 'SYSESA (GyT Continental)',
    period: 'Mar 2026 – Present',
    achievements: [
      'Design and execute automated test cases with Selenium and Java, safeguarding quality and performance across 24/7 production banking systems',
      'Build CI/CD pipelines on GitLab and Azure DevOps, partnering with developers, PMs, and stakeholders to ship reliable releases',
    ],
  },
  {
    role: 'Software Engineer Assistant',
    company: 'Zigi App',
    period: 'Sep 2025 – Mar 2026',
    achievements: [
      'Coordinated cross-team technical initiatives in a fintech environment, supporting architecture and deployment decisions',
      'Automated operational processes and centralized technical documentation, reducing manual work and improving response times',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Allied Global Technology Services',
    period: 'Oct 2024 – Sep 2025',
    achievements: [
      'Implemented secure authentication flows for production fintech applications serving end users',
      'Integrated RESTful APIs and third-party SDKs, optimizing performance and reducing API latency',
    ],
  },
  {
    role: 'Support Engineer',
    company: 'Red Chapina',
    period: 'Mar 2024 – Oct 2024',
    achievements: [
      'Resolved Linux server issues and managed deployments and infrastructure on AWS EC2',
      'Administered access controls and led root-cause analysis using monitoring tools to ensure stability and availability',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Tubagua, S.A.',
    period: 'Sep 2023 – Mar 2024',
    achievements: [
      'Refactored ERP modules (PHP/JavaScript) for maintainability and scalability, optimizing server and database performance',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Página Web Guatemala',
    period: 'May 2023 – Aug 2023',
    achievements: [
      'Built responsive websites from scratch — no page builders or templates — using HTML5, CSS3, JavaScript, jQuery, and Bootstrap 5',
      'Extended functionality with PHP and MySQL, and customized the WordPress core for client-specific solutions',
    ],
  },
  {
    role: 'IT Systems Analyst',
    company: 'DISMAFER',
    period: 'Sep 2020 – Apr 2023',
    achievements: [
      'Provided remote technical support and infrastructure monitoring, administering ERP systems and internal web platforms',
      'Maintained network infrastructure and server environments, leading technology improvement projects across multiple departments',
    ],
  },
];

const experienceEs: ExperienceEntry[] = [
  {
    role: 'SDET',
    company: 'SYSESA (GyT Continental)',
    period: 'Mar 2026 – Presente',
    achievements: [
      'Diseño y ejecución de casos de prueba automatizados con Selenium y Java, protegiendo la calidad y el rendimiento de sistemas bancarios en producción 24/7',
      'Construcción de pipelines de CI/CD en GitLab y Azure DevOps, colaborando con desarrolladores, PMs y stakeholders para entregar releases confiables',
    ],
  },
  {
    role: 'Asistente de Ingeniería de Software',
    company: 'Zigi App',
    period: 'Sep 2025 – Mar 2026',
    achievements: [
      'Coordinación de iniciativas técnicas entre equipos en un entorno fintech, apoyando decisiones de arquitectura y despliegue',
      'Automatización de procesos operativos y centralización de documentación técnica, reduciendo trabajo manual y mejorando tiempos de respuesta',
    ],
  },
  {
    role: 'Ingeniero de Software',
    company: 'Allied Global Technology Services',
    period: 'Oct 2024 – Sep 2025',
    achievements: [
      'Implementación de flujos de autenticación seguros para aplicaciones fintech en producción con usuarios finales',
      'Integración de APIs RESTful y SDKs de terceros, optimizando el rendimiento y reduciendo la latencia de las APIs',
    ],
  },
  {
    role: 'Ingeniero de Soporte',
    company: 'Red Chapina',
    period: 'Mar 2024 – Oct 2024',
    achievements: [
      'Resolución de incidencias en servidores Linux y gestión de despliegues e infraestructura en AWS EC2',
      'Administración de controles de acceso y análisis de causa raíz con herramientas de monitoreo para garantizar estabilidad y disponibilidad',
    ],
  },
  {
    role: 'Ingeniero Full-Stack',
    company: 'Tubagua, S.A.',
    period: 'Sep 2023 – Mar 2024',
    achievements: [
      'Refactorización de módulos ERP (PHP/JavaScript) para mejorar mantenibilidad y escalabilidad, optimizando el rendimiento de servidor y base de datos',
    ],
  },
  {
    role: 'Ingeniero Full-Stack',
    company: 'Página Web Guatemala',
    period: 'May 2023 – Ago 2023',
    achievements: [
      'Construcción de sitios web responsivos desde cero — sin page builders ni plantillas — usando HTML5, CSS3, JavaScript, jQuery y Bootstrap 5',
      'Extensión de funcionalidad con PHP y MySQL, y personalización del núcleo de WordPress para soluciones específicas de cliente',
    ],
  },
  {
    role: 'Analista de Sistemas TI',
    company: 'DISMAFER',
    period: 'Sep 2020 – Abr 2023',
    achievements: [
      'Soporte técnico remoto y monitoreo de infraestructura, administrando sistemas ERP y plataformas web internas',
      'Mantenimiento de infraestructura de red y entornos de servidor, liderando proyectos de mejora tecnológica en múltiples departamentos',
    ],
  },
];

const educationEn: EducationEntry[] = [
  {
    degree: 'Technical Degree in Software Development',
    institution: 'Universidad Galileo',
    period: '2023 – 2025',
    status: 'Coursework Completed',
  },
];

const educationEs: EducationEntry[] = [
  {
    degree: 'Técnico en Desarrollo de Software',
    institution: 'Universidad Galileo',
    period: '2023 – 2025',
    status: 'Cursos completados',
  },
];

export const content: Record<Lang, HomeContent> = {
  en: { projects: projectsEn, skills: skillsEn, experience: experienceEn, education: educationEn },
  es: { projects: projectsEs, skills: skillsEs, experience: experienceEs, education: educationEs },
};
