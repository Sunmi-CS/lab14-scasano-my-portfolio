import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'nextauth-security-app',
    title: 'NextAuth Authentication & Security',
    description: 'Aplicación web desarrollada con Next.js y NextAuth.js que implementa autenticación segura mediante Google OAuth, GitHub y credenciales personalizadas. Incluye registro de usuarios, cifrado de contraseñas con bcrypt, protección de rutas, manejo de sesiones y bloqueo temporal tras múltiples intentos fallidos de inicio de sesión.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
    technologies: [
        'Next.js',
        'TypeScript',
        'NextAuth.js',
        'Google OAuth',
        'GitHub OAuth',
        'bcrypt',
        'Tailwind CSS'
    ],
    demoUrl: 'https://lab13-next-auth-app1.onrender.com/signIn?callbackUrl=%2Fdashboard',
    githubUrl: 'https://github.com/Sunmi-CS/LAB13_next-auth-app',
    featured: true,
    },
  {
    slug: 'library-api-system',
    title: 'Library Management API',
    description: 'Sistema de gestión de biblioteca desarrollado con Next.js, Prisma ORM y PostgreSQL en Supabase. Incluye API Routes para autores y libros, operaciones CRUD completas, búsquedas avanzadas con filtros, paginación, estadísticas dinámicas por autor y una interfaz responsiva para la administración de contenido.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
    technologies: [
        'Next.js',
        'TypeScript',
        'Prisma ORM',
        'PostgreSQL',
        'Supabase',
        'Tailwind CSS',
        'REST API'
    ],
    demoUrl: 'https://lab-12-dawa-sc-7.onrender.com/books',
    githubUrl: 'https://github.com/Sunmi-CS/Lab_12_DAWA_SC',
    featured: true,
    },
  {
    slug: 'nextjs-rickmorty',
    title: 'Rick and Morty App',
    description: 'Aplicación desarrollada con Next.js que implementa rutas estáticas y dinámicas, SSG, ISR, SSR y CSR. Incluye un explorador de personajes de Rick and Morty con búsqueda en tiempo real, generación de rutas estáticas y revalidación automática de contenido.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop',
    technologies: [
        'Next.js', 
        'TypeScript', 
        'Tailwind CSS', 
        'Rick and Morty API'
    ],
    demoUrl: 'https://lab-10-dawa-sc.onrender.com/rickandmorty',
    githubUrl: 'https://github.com/Sunmi-CS/Lab_10_DAWA_SC',
    featured: true,
    },
];

export const personalInfo = {
    name: 'Sunmi A. Casaño Suarez',
    title: 'Full Stack Developer',
    description:
    'Desarrollador Full Stack especializado en la creación de aplicaciones web modernas, escalables y centradas en la experiencia del usuario. Tengo experiencia trabajando con tecnologías como React, Next.js, TypeScript, Node.js y bases de datos relacionales. Me apasiona aprender nuevas herramientas, optimizar procesos y transformar ideas en soluciones digitales funcionales e innovadoras.',
    email: '[sunmicasano@email.com](mailto:sunmicasano@email.com)',
    github: 'https://github.com/Sunmi-CS',
    linkedin: 'https://www.linkedin.com/in/sunmi-casa%C3%B1o-su%C3%A1rez-17ab22346/',
    siteUrl: 'https://tuportafolio.com',
    avatar:
    'https://images.unsplash.com/photo-1612288106997-6078c69d5386?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
