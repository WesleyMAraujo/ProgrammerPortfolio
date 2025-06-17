export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'api';
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Sistema completo de gerenciamento para lojas online com analytics em tempo real e controle de estoque.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "web",
    githubUrl: "https://github.com/WesleyMAraujo",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "App de Delivery",
    description: "Aplicativo mobile para delivery de comida com rastreamento em tempo real e sistema de pagamento integrado.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "Firebase", "Maps API"],
    category: "mobile",
    githubUrl: "https://github.com/WesleyMAraujo",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Plataforma SaaS",
    description: "Sistema de gestão empresarial com módulos de CRM, financeiro e relatórios avançados.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    category: "web",
    githubUrl: "https://github.com/WesleyMAraujo",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "API de Integração",
    description: "API RESTful para integração entre sistemas com autenticação JWT e documentação interativa.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Node.js", "Express", "Swagger"],
    category: "api",
    githubUrl: "https://github.com/WesleyMAraujo",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Site Institucional",
    description: "Website corporativo responsivo com sistema de blog e otimização para SEO.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Tailwind", "Strapi"],
    category: "web",
    githubUrl: "https://github.com/WesleyMAraujo",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "App de Fitness",
    description: "Aplicativo para acompanhamento de exercícios com integração a wearables e gamificação.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Flutter", "Firebase", "Health APIs"],
    category: "mobile",
    githubUrl: "https://github.com/WesleyMAraujo",
    liveUrl: "#"
  }
];

export const skills = [
  {
    category: "Frontend",
    icon: "fas fa-code",
    color: "bg-primary",
    technologies: "React, Vue.js, HTML5, CSS3, JavaScript, TypeScript"
  },
  {
    category: "Backend",
    icon: "fas fa-server",
    color: "bg-cyan-500",
    technologies: "Node.js, Python, PHP, APIs REST, Microserviços"
  },
  {
    category: "Database",
    icon: "fas fa-database",
    color: "bg-green-500",
    technologies: "MySQL, PostgreSQL, MongoDB, Firebase"
  },
  {
    category: "Ferramentas",
    icon: "fas fa-tools",
    color: "bg-purple-500",
    technologies: "Git, Docker, AWS, Vercel, GitHub Actions"
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/WesleyMAraujo",
    icon: "fab fa-github",
    color: "bg-gray-800 hover:bg-gray-700"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/wesley-monteiro-de-araujo-427a91230/",
    icon: "fab fa-linkedin",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/wesleymont_a/",
    icon: "fab fa-instagram",
    color: "bg-pink-500 hover:bg-pink-600"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5584998024494",
    icon: "fab fa-whatsapp",
    color: "bg-green-500 hover:bg-green-600"
  }
];

export const contactInfo = [
  {
    icon: "fas fa-envelope",
    color: "bg-primary",
    title: "Email",
    value: "wesleymonteirodearaujo@gmail.com",
    link: "mailto:wesleymonteirodearaujo@gmail.com"
  },
  {
    icon: "fab fa-whatsapp",
    color: "bg-green-500",
    title: "WhatsApp",
    value: "+55 (84) 99802-4494",
    link: "https://wa.me/5584998024494"
  },
  {
    icon: "fab fa-linkedin",
    color: "bg-blue-600",
    title: "LinkedIn",
    value: "Wesley Monteiro de Araujo",
    link: "https://www.linkedin.com/in/wesley-monteiro-de-araujo-427a91230/"
  },
  {
    icon: "fab fa-github",
    color: "bg-gray-800",
    title: "GitHub",
    value: "@WesleyMAraujo",
    link: "https://github.com/WesleyMAraujo"
  }
];
