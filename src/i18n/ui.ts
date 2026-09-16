export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "HERO.MY_GREETING": "Hi there! 👋",
    "HERO.MY_NAME": "My name is",
    "HERO.MY_RESUME":
      "I'm a fullstack developer specialized in JavaScript. I am passionate about the world of development and I am\nconstantly looking for new projects that allow me to learn and improve my technical skills.",
    "HERO.MY_HOBBY":
      "Outside of work, I enjoy spending time with my friends and exploring new places.",

    "HERO.CURRENTLY.LABEL": "Currently",
    "HERO.CURRENTLY.ROLE": "Software Engineer 2 at Code ÉXITOS",
    "HERO.CURRENTLY.STACK": "VueJS · NuxtJS · .NET · ASPX Migration",

    "NAV.TECHNICAL_SKILLS": "Technical skills",
    "NAV.COLLABORATIONS": "Collaborations",
    "NAV.PERSONAL_PROJECTS": "Personal projects",
    "NAV.RECENT_WORKS": "Recent works",

    "SKILLS.CATEGORY.FRONTEND": "Frontend",
    "SKILLS.CATEGORY.BACKEND": "Backend",
    "SKILLS.CATEGORY.DATABASES": "Databases",
    "SKILLS.CATEGORY.OTHERS": "Others",

    "RECENT_WORKS.TITLE": "Recent Works",
    "RECENT_WORKS.CODEX_2.CONTEXT":
      "Modernization of legacy applications and development of new interfaces in a microservices-based environment.",
    "RECENT_WORKS.CODEX_2.ROLE":
      "FullStack development focused on modern frontend and legacy system transition.",
    "RECENT_WORKS.CODEX_2.CHALLENGE.1": "Migrating without breaking existing functionality in a complex legacy codebase",
    "RECENT_WORKS.CODEX_2.CHALLENGE.2": "Coexistence of legacy and modern technologies within the same application",
    "RECENT_WORKS.CODEX_2.CHALLENGE.3": "Coordination between modern frontend and distributed .NET backend",
    "RECENT_WORKS.CODEX_2.RESULT.1": "Modernized and scalable frontend foundation",
    "RECENT_WORKS.CODEX_2.RESULT.2": "Reduced dependency on legacy technology",
    "RECENT_WORKS.CODEX_2.RESULT.3": "Improved team development velocity",

    "RECENT_WORKS.CODEX_2.1":
      "Migrated 10+ legacy ASPX views to Vue.js as part of an ongoing progressive rollout, preserving existing business logic and preventing regressions.",
    "RECENT_WORKS.CODEX_2.2":
      "Built new interfaces with Vue.js and Nuxt.js based on Figma designs, leveraging modern tools such as Lovable.",
    "RECENT_WORKS.CODEX_2.3":
      "Integrated .NET backend microservices via REST APIs, managing complex states and data flows.",
    "RECENT_WORKS.CODEX_2.4":
      "Refactored and maintained legacy modules to ensure stability throughout the migration process.",
    "RECENT_WORKS.CODEX_2.5":
      "Implemented a reusable component architecture to improve maintainability and development velocity.",

    "RECENT_WORKS.CODEX.CONTEXT":
      "Development of web and mobile applications alongside deployment on cloud infrastructure.",
    "RECENT_WORKS.CODEX.ROLE":
      "FullStack developer contributing to web and mobile applications, cloud infrastructure, and backend services.",
    "RECENT_WORKS.CODEX.CHALLENGE.1": "Adapting native code to a cross-platform architecture",
    "RECENT_WORKS.CODEX.CHALLENGE.2": "Managing cloud infrastructure and automated deployments",
    "RECENT_WORKS.CODEX.CHALLENGE.3": "Integration across multiple distributed services",
    "RECENT_WORKS.CODEX.RESULT.1": "Reduced mobile maintenance effort through a unified codebase",
    "RECENT_WORKS.CODEX.RESULT.2": "Faster and more consistent deliveries through CI/CD automation",
    "RECENT_WORKS.CODEX.RESULT.3": "More scalable and automated cloud infrastructure",

    "RECENT_WORKS.CODEX.1":
      "Migrated native mobile applications (Android/iOS) to React Native, unifying the codebase and reducing maintenance overhead.",
    "RECENT_WORKS.CODEX.2":
      "Implemented CI/CD pipelines with GitHub Actions to automate deployments.",
    "RECENT_WORKS.CODEX.3":
      "Deployed containerized services using Kubernetes, AWS ECS, and ECR.",
    "RECENT_WORKS.CODEX.4":
      "Developed microservices with AWS Lambda and API Gateway.",
    "RECENT_WORKS.CODEX.5":
      "Implemented backend business logic with Node.js (NestJS) and Python.",

    "RECENT_WORKS.CLINPAYS.CONTEXT":
      "Development of Paygate, a national payment gateway integrated with 6 banks and 2 e-wallet providers in Honduras.",
    "RECENT_WORKS.CLINPAYS.ROLE":
      "Led a 3-person development team, coordinating new feature implementation aligned with strategic business objectives.",

    "RECENT_WORKS.CLINPAYS.1":
      "Designed and implemented a payments orchestrator that dynamically routed daily transaction volume to the optimal bank or provider based on card BIN and commission rates.",
    "RECENT_WORKS.CLINPAYS.2":
      "Integrated 6 banks and 2 e-wallet providers in Honduras, enabling real-time payment processing and automated account reconciliation.",
    "RECENT_WORKS.CLINPAYS.3":
      "Implemented KYC and 3DS authentication flows with Banco BAC Honduras, meeting regulatory and security compliance requirements.",
    "RECENT_WORKS.CLINPAYS.4":
      "Participated in PCI DSS compliance processes, including security controls, internal audits, and policy enforcement for the platform.",
    "RECENT_WORKS.CLINPAYS.5":
      "Administered server infrastructure for the Paygate platform, applying security hardening and performance optimizations.",

    "RECENT_WORKS.CLINPAYS.CHALLENGE.1": "Managing multiple banking integrations with different behaviors and protocols",
    "RECENT_WORKS.CLINPAYS.CHALLENGE.2": "Ensuring high availability and reliability in financial transaction processing",
    "RECENT_WORKS.CLINPAYS.CHALLENGE.3": "Meeting PCI DSS and regulatory security standards for payment platforms",

    "RECENT_WORKS.CLINPAYS.RESULT.1": "Platform capable of intelligently routing transactions based on card BIN and commission optimization",
    "RECENT_WORKS.CLINPAYS.RESULT.2": "Improved stability and reliability in payment processing across multiple financial entities",
    "RECENT_WORKS.CLINPAYS.RESULT.3": "Scalable architecture ready to integrate new banking providers and payment methods",

    "RECENT_WORKS.SECTION.CONTEXT": "Context",
    "RECENT_WORKS.SECTION.ROLE": "Role",
    "RECENT_WORKS.SECTION.CONTRIBUTIONS": "Key Contributions",
    "RECENT_WORKS.SECTION.CHALLENGES": "Technical Challenges",
    "RECENT_WORKS.SECTION.RESULTS": "Results",

    "CURRICULUM.TITLE": "Curriculum Vitae",
    "CURRICULUM.SUMMARY.TITLE": "Summary",
    "CURRICULUM.SUMMARY.DESCRIPTION":
      "Enthusiastic Full Stack Developer with a proven track record in ReactJS, React Native, VueJS, MongoDB, AWS, and more. Proficient in creating interactive user interfaces and scalable backend solutions. Passionate about contributing to innovative software solutions and embracing new challenges within a dynamic work environment. Committed to delivering high-quality technology solutions and eager to support architectural solutions across the stack while working alongside ambitious companies. Eager to bring my expertise in TypeScript/Node to help build impactful products with your team.",
    "CURRICULUM.SKILLS.TITLE": "Skills",
    "CURRICULUM.LANGUAGES.TITLE": "Languages",
    "CURRICULUM.LANGUAGES.NATIVE": "Native",
    "CURRICULUM.LANGUAGES.INTERMEDIATE": "Intermediate",
    "CURRICULUM.LANGUAGES.ES": "Spanish",
    "CURRICULUM.LANGUAGES.EN": "English",
    "CURRICULUM.ROLE": "Full Stack Developer",
    "CURRICULUM.DATE.PRESENT": "Present",
    "CURRICULUM.EXPERIENCE.TITLE": "Experience",
    "CURRICULUM.EXPERIENCE.CODEX_2.TITLE": "Software Engineer 2",
    "CURRICULUM.EXPERIENCE.CODEX.TITLE": "Software Developer",
    "CURRICULUM.EXPERIENCE.CLINPAYS.TITLE": "FullStack Developer / Tech Lead",
    "CURRICULUM.EDUCATION.TITLE": "Education",
    "CURRICULUM.EDUCATION.SEDA.TITLE": "General English - Intermediate",
    "CURRICULUM.EDUCATION.SEDA.LOCATION": "Dublin, Ireland",
    "CURRICULUM.EDUCATION.UNIR.TITLE": "Master in Design and Project Management",
    "CURRICULUM.EDUCATION.UNIR.LOCATION": "La Rioja, Spain",
    "CURRICULUM.EDUCATION.EADIC.TITLE": "Master in Big Data and Applied Artificial Intelligence",
    "CURRICULUM.EDUCATION.EADIC.LOCATION": "Madrid, Spain",
    "CURRICULUM.EDUCATION.UJN.TITLE": "Industrial and Systems Engineering",
    "CURRICULUM.EDUCATION.UJN.LOCATION": "San Pedro Sula, Honduras",
  },
  es: {
    "HERO.MY_GREETING": "Hola! 👋",
    "HERO.MY_NAME": "Mi nombre es",
    "HERO.MY_RESUME":
      "Soy un desarrollador fullstack especializado en JavaScript. Me apasiona el mundo del desarrollo y estoy\nconstantemente en búsqueda de nuevos proyectos que me permitan aprender y mejorar mis habilidades técnicas.",
    "HERO.MY_HOBBY":
      "Fuera del trabajo, disfruto pasar tiempo con mis amigos y explorar nuevos lugares.",

    "HERO.CURRENTLY.LABEL": "Actualmente",
    "HERO.CURRENTLY.ROLE": "Software Engineer 2 en Code ÉXITOS",
    "HERO.CURRENTLY.STACK": "VueJS · NuxtJS · .NET · Migración ASPX",

    "NAV.TECHNICAL_SKILLS": "Habilidades técnicas",
    "NAV.COLLABORATIONS": "Colaboraciones",
    "NAV.PERSONAL_PROJECTS": "Proyectos personales",
    "NAV.RECENT_WORKS": "Trabajos recientes",

    "SKILLS.CATEGORY.FRONTEND": "Frontend",
    "SKILLS.CATEGORY.BACKEND": "Backend",
    "SKILLS.CATEGORY.DATABASES": "Bases de datos",
    "SKILLS.CATEGORY.OTHERS": "Otros",

    "RECENT_WORKS.TITLE": "Trabajos Recientes",
    "RECENT_WORKS.CODEX_2.CONTEXT":
      "Modernización de aplicaciones legacy y desarrollo de nuevas interfaces en un entorno basado en microservicios.",
    "RECENT_WORKS.CODEX_2.ROLE":
      "Desarrollo FullStack enfocado en frontend moderno y transición de sistemas legacy.",
    "RECENT_WORKS.CODEX_2.CHALLENGE.1": "Migrar sin romper funcionalidad existente en una base de código legacy compleja",
    "RECENT_WORKS.CODEX_2.CHALLENGE.2": "Coexistencia de tecnologías legacy y modernas dentro de la misma aplicación",
    "RECENT_WORKS.CODEX_2.CHALLENGE.3": "Coordinación entre frontend moderno y backend .NET distribuido",
    "RECENT_WORKS.CODEX_2.RESULT.1": "Base frontend modernizada y escalable",
    "RECENT_WORKS.CODEX_2.RESULT.2": "Menor dependencia de tecnología legacy",
    "RECENT_WORKS.CODEX_2.RESULT.3": "Mayor velocidad de desarrollo del equipo",

    "RECENT_WORKS.CODEX_2.1":
      "Migré más de 10 vistas ASPX legacy a Vue.js como parte de un rollout progresivo en curso, preservando la lógica de negocio existente y previniendo regresiones.",
    "RECENT_WORKS.CODEX_2.2":
      "Desarrollé nuevas interfaces con Vue.js y Nuxt.js basadas en diseños de Figma, aprovechando herramientas modernas como Lovable.",
    "RECENT_WORKS.CODEX_2.3":
      "Integré microservicios backend .NET a través de REST APIs, gestionando estados complejos y flujos de datos.",
    "RECENT_WORKS.CODEX_2.4":
      "Refactoricé y mantuve módulos legacy para garantizar estabilidad durante el proceso de migración.",
    "RECENT_WORKS.CODEX_2.5":
      "Implementé una arquitectura de componentes reutilizables para mejorar la mantenibilidad y velocidad de desarrollo.",

    "RECENT_WORKS.CODEX.CONTEXT":
      "Desarrollo de aplicaciones web y móviles junto con despliegue en infraestructura cloud.",
    "RECENT_WORKS.CODEX.ROLE":
      "Desarrollador FullStack contribuyendo a aplicaciones web y móviles, infraestructura cloud y servicios backend.",
    "RECENT_WORKS.CODEX.CHALLENGE.1": "Adaptar código nativo a una arquitectura multiplataforma",
    "RECENT_WORKS.CODEX.CHALLENGE.2": "Gestionar infraestructura cloud y despliegues automatizados",
    "RECENT_WORKS.CODEX.CHALLENGE.3": "Integración entre múltiples servicios distribuidos",
    "RECENT_WORKS.CODEX.RESULT.1": "Menor esfuerzo de mantenimiento móvil a través de una base de código unificada",
    "RECENT_WORKS.CODEX.RESULT.2": "Entregas más rápidas y consistentes mediante automatización CI/CD",
    "RECENT_WORKS.CODEX.RESULT.3": "Infraestructura cloud más escalable y automatizada",

    "RECENT_WORKS.CODEX.1":
      "Migré aplicaciones móviles nativas (Android/iOS) a React Native, unificando la base de código y reduciendo la carga de mantenimiento.",
    "RECENT_WORKS.CODEX.2":
      "Implementé pipelines CI/CD con GitHub Actions para automatizar despliegues.",
    "RECENT_WORKS.CODEX.3":
      "Desplegué servicios en contenedores usando Kubernetes, AWS ECS y ECR.",
    "RECENT_WORKS.CODEX.4":
      "Desarrollé microservicios con AWS Lambda y API Gateway.",
    "RECENT_WORKS.CODEX.5":
      "Implementé lógica de negocio backend con Node.js (NestJS) y Python.",

    "RECENT_WORKS.CLINPAYS.CONTEXT":
      "Desarrollo de Paygate, una pasarela de pagos nacional integrada con 6 bancos y 2 billeteras electrónicas en Honduras.",
    "RECENT_WORKS.CLINPAYS.ROLE":
      "Lideré un equipo de desarrollo de 3 personas, coordinando la implementación de nuevas funcionalidades alineadas con los objetivos estratégicos del negocio.",

    "RECENT_WORKS.CLINPAYS.1":
      "Diseñé e implementé un orquestador de pagos que enrutaba dinámicamente el volumen diario de transacciones al banco o proveedor óptimo según el BIN de la tarjeta y las comisiones.",
    "RECENT_WORKS.CLINPAYS.2":
      "Integré 6 bancos y 2 billeteras electrónicas en Honduras, habilitando el procesamiento de pagos en tiempo real y la conciliación automática de cuentas.",
    "RECENT_WORKS.CLINPAYS.3":
      "Implementé flujos de autenticación KYC y 3DS en conjunto con Banco BAC Honduras, cumpliendo los requisitos regulatorios y de seguridad.",
    "RECENT_WORKS.CLINPAYS.4":
      "Participé en procesos de cumplimiento PCI DSS, incluyendo controles de seguridad, auditorías internas y políticas de la plataforma.",
    "RECENT_WORKS.CLINPAYS.5":
      "Administré la infraestructura de servidores de la plataforma Paygate, aplicando mejoras de seguridad y optimización de rendimiento.",

    "RECENT_WORKS.CLINPAYS.CHALLENGE.1": "Manejo de múltiples integraciones bancarias con comportamientos y protocolos distintos",
    "RECENT_WORKS.CLINPAYS.CHALLENGE.2": "Garantizar alta disponibilidad y confiabilidad en el procesamiento de transacciones financieras",
    "RECENT_WORKS.CLINPAYS.CHALLENGE.3": "Cumplimiento de estándares PCI DSS y requisitos regulatorios para plataformas de pago",

    "RECENT_WORKS.CLINPAYS.RESULT.1": "Plataforma capaz de enrutar transacciones de forma inteligente según el BIN de tarjeta y optimización de comisiones",
    "RECENT_WORKS.CLINPAYS.RESULT.2": "Mayor estabilidad y confiabilidad en el procesamiento de pagos con múltiples entidades financieras",
    "RECENT_WORKS.CLINPAYS.RESULT.3": "Arquitectura escalable lista para integrar nuevos proveedores bancarios y métodos de pago",

    "RECENT_WORKS.SECTION.CONTEXT": "Contexto",
    "RECENT_WORKS.SECTION.ROLE": "Rol",
    "RECENT_WORKS.SECTION.CONTRIBUTIONS": "Aportes Clave",
    "RECENT_WORKS.SECTION.CHALLENGES": "Retos Técnicos",
    "RECENT_WORKS.SECTION.RESULTS": "Resultados",

    "CURRICULUM.TITLE": "Hoja de vida",
    "CURRICULUM.SUMMARY.TITLE": "Resumen",
    "CURRICULUM.SUMMARY.DESCRIPTION":
      "Desarrollador Full Stack entusiasta con una trayectoria comprobada en ReactJS, React Native, VueJS, MongoDB, AWS y más. Competente en la creación de interfaces de usuario interactivas y soluciones escalables de backend. Apasionado por contribuir a soluciones de software innovadoras y aceptar nuevos desafíos dentro de un entorno de trabajo dinámico. Comprometido con la entrega de soluciones tecnológicas de alta calidad y ansioso por respaldar soluciones arquitectónicas en todo el stack mientras trabaja junto con empresas ambiciosas. Ansioso por aportar mi experiencia en TypeScript/Node para ayudar a crear productos impactantes con su equipo.",
    "CURRICULUM.SKILLS.TITLE": "Habilidades",
    "CURRICULUM.LANGUAGES.TITLE": "Idiomas",
    "CURRICULUM.LANGUAGES.NATIVE": "Nativo",
    "CURRICULUM.LANGUAGES.INTERMEDIATE": "Intermedio",
    "CURRICULUM.LANGUAGES.ES": "Español",
    "CURRICULUM.LANGUAGES.EN": "Inglés",
    "CURRICULUM.ROLE": "Desarrolladora Full Stack",
    "CURRICULUM.DATE.PRESENT": "Presente",
    "CURRICULUM.EXPERIENCE.TITLE": "Experiencia",
    "CURRICULUM.EXPERIENCE.CODEX_2.TITLE": "Ingeniera de Software 2",
    "CURRICULUM.EXPERIENCE.CODEX.TITLE": "Desarrolladora de Software",
    "CURRICULUM.EXPERIENCE.CLINPAYS.TITLE": "Desarrolladora FullStack / Líder Técnica",
    "CURRICULUM.EDUCATION.TITLE": "Educación",
    "CURRICULUM.EDUCATION.SEDA.TITLE": "Inglés General - Intermedio",
    "CURRICULUM.EDUCATION.SEDA.LOCATION": "Dublín, Irlanda",
    "CURRICULUM.EDUCATION.UNIR.TITLE": "Máster en Diseño y Gestión de Proyectos",
    "CURRICULUM.EDUCATION.UNIR.LOCATION": "La Rioja, España",
    "CURRICULUM.EDUCATION.EADIC.TITLE": "Máster en Big Data e Inteligencia Artificial Aplicada",
    "CURRICULUM.EDUCATION.EADIC.LOCATION": "Madrid, España",
    "CURRICULUM.EDUCATION.UJN.TITLE": "Ingeniería Industrial y de Sistemas",
    "CURRICULUM.EDUCATION.UJN.LOCATION": "San Pedro Sula, Honduras",
  },
} as const;
