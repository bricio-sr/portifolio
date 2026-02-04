import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Fabricio",
  lastName: "Amorim",
  name: `Fabricio`,
  role: "Fullstack Developer",
  avatar: "/images/avatar.jpg",
  email: "f@bricio.dev.br",
  location: "America/Sao_Paulo",
  languages: ["Português", "English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bricio-sr",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fabricioroney",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/fabricio_roney/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transformando caos em ordem sistêmica</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Prazer, sou Fabricio Roney. Projeto infraestruturas que não apenas escalam, mas resistem,
      garantindo que a tecnologia seja o motor — e nunca o gargalo — do negócio.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `Portifólio – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Sou Fabricio Roney, SRE e Especialista em Modelagem de Sistemas. Minha missão é otimizar a relação entre código,
        infraestrutura e quem a opera. Utilizo princípios de Neurociência Cognitiva para reduzir a carga operacional e
        modelos estocásticos para prever falhas antes que elas aconteçam.
        O resultado? Sistemas mais eficientes e operações verdadeiramente resilientes.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiências Profissionais",
    experiences: [
      {
        company: "Grupo Base - Construção Civil",
        users: "1500+",
        timeframe: "2022 - Present",
        role: "Desenvolvedor Fullstack",
        achievements: [
          <>
            Atuo como referência técnica em desafios de alta complexidade, sendo o responsável por introduzir e resolver problemas em tecnologias desconhecidas pelo time, além de liderar a melhoria contínua da qualidade de código.
          </>,
          <>
            Projetei arquiteturas de integração que servem como ponte entre diferentes plataformas, automatizando processos críticos de ERP com ganho de eficiência operacional.
          </>,
          <>
            Implementação de práticas de SRE e Observabilidade para garantir a resiliência e a alta disponibilidade de sistemas distribuídos.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          }, */
        ],
      },
      {
        company: "Vacivitta - Serviços de Imunização Humana",
        users: "70+",
        timeframe: "2021 - 2022",
        role: "Analista de Sistemas",
        achievements: [
          <>
            Atuação híbrida entre gestão e técnica, liderando equipe de TI na criação de sistemas de automação de processos e na administração estratégica do sistema ERP da empresa.
          </>,
          <>
            Responsável pelo gerenciamento do parque de dispositivos e infraestrutura tecnológica, garantindo a continuidade operacional das unidades de imunização.
          </>,
        ],
        images: [],
      },
      {
        company: "Prefeitura da Estância Turística de Salto",
        users: "3000+",
        timeframe: "2018 - 2021",
        role: "Suporte Técnico de TI",
        achievements: [
          <>
            Vivência operacional profunda, gerenciando centrais de distribuição de internet, sistemas de telefonia e infraestrutura física de rede em larga escala.
          </>,
          <>
            Desenvolvi estratégias de otimização de recursos tecnológicos e atuei diretamente no atendimento ao público, conciliando o rigor técnico com a resolução de problemas críticos para a municipalidade.
          </>,
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: true,
    title: "Formação Acadêmica",
    institutions: [
      {
        name: "IMECC UNICAMP",
        description: <>Candidato ao Mestrado Profissional em Matemática Aplicada e Computacional.</>,
      },
      {
        name: "Universidade Pitágoras Unopar Anhanguera",
        description: <>
          • Pós-Graduação em Neurociências e Comportamento (Em andamento).<br/>
          • Especialização em Engenharia de Software (Qualidade e Teste).<br/>
          • Especialização em SRE (Site Reliability Engineering).<br/>
          • Graduação em Tecnologia DevOps.
        </>,
      },
      {
        name: "FATEC - Faculdade de Tecnologia de Itu",
        description: <>Graduação em Gestão de Tecnologia da Informação (Em andamento).</>,
      },
    ],
  },
  certs: {
    display: true,
    title: "Certificações e Especializações",
    categories: [
      {
        title: "Cloud & Infraestrutura (SRE/DevOps)",
        items: [
          { name: "AWS Cloud Practitioner Essentials" },
          { name: "Infraestrutura como Código: AWS com Ansible e Terraform" },
          { name: "AWS System Manager" },
          { name: "Moving to Managed Databases to AWS" },
          { name: "Build and Secure Networks in Google Cloud" },
          { name: "IBM z/OS Mainframe Practitioner" }
        ]
      },
      {
        title: "Inteligência Artificial e Data Science",
        items: [
          { name: "Data Science IBM (Coursera)" },
          { name: "Developing Machine Learning Applications (AWS)" },
          { name: "Prepare Data for ML APIs on Google Cloud" },
          { name: "Perform Foundational Data, ML, and AI Tasks (Google)" }
        ]
      },
      {
        title: "Desenvolvimento e Engenharia de Software",
        items: [
          { name: "Flutter Development (Google)" },
          { name: "PCAP – Programming Essentials in Python" },
          { name: "Segurança de Aplicações" },
          { name: "Arduino para Robótica" }
        ]
      },
      {
        title: "Redes e Comunicações",
        items: [
          { name: "ISSABEL Communication Server" },
          { name: "FiberHome BroadBand UNM2000" },
          { name: "Administração de Redes" },
          { name: "Google IT Support Professional" }
        ]
      }
    ]
  },
  projects: {
    title: "Projetos",
    display: true,
    items: [
      {
        title: "Cibus",
        description: "Assistente nutricional via WhatsApp com IA Multimodal (Gemini 3 Flash). Elimina a fricção do registro de dietas usando visão computacional para análise de calorias instantânea.",
        techStack: ["Golang", "Google Cloud Run", "Gemini 3 Flash", "PostgreSQL", "WhatsApp API", "Stripe"],
        link: "https://cibus.bricio.dev.br", 
        image: { src: '/images/cibus-cover.png', alt: 'Cibus Project', width: 16, height: 9 },
        comingSoon: false
      },
      {
        title: "What Is Up",
        description: "Ferramenta de observabilidade 'Zero-Ops' via WhatsApp. Utiliza algoritmos estatísticos (Z-Score) para prever anomalias de latência antes que se tornem timeouts.",
        techStack: ["Golang", "Google Cloud Run", "PostgreSQL", "Z-Score Algo", "Stripe"],
        link: null,
        comingSoon: true
      },
      {
        title: "WePets",
        description: "Gestão de identidade descentralizada para rastreabilidade animal via IoT (NFC). Foca em privacidade (LGPD) e ofuscação de dados com Hashids.",
        techStack: ["Golang", "Next.js", "IoT/NFC", "Hashids", "Cloudflare"],
        link: null,
        comingSoon: true
      }
    ]
  },
  technical: {
    display: true,
    title: "Habilidades e Competências",
    skills: [
      {
        title: "SRE & Infraestrutura de Missão Crítica",
        description: (
          <>
            Foco em alta disponibilidade, resiliência e automação de processos críticos de ERP. 
            Especialista em arquitetura distribuída e escalabilidade sistêmica.
          </>
        ),
        tags: [
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Docker", icon: "docker" },
          { name: "Terraform", icon: "terraform" },
          { name: "AWS", icon: "aws" },
        ],
        images: [],
      },
      {
        title: "Desenvolvimento FullStack & Algoritmos",
        description: (
          <>
            Sólida experiência em modelagem de sistemas e otimização algorítmica.
            Atuação com diversas linguagens para integração de módulos e microsserviços.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Node.js", icon: "nodejs" },
          { name: "PostgreSQL", icon: "postgresql" },
        ],
        images: [],
      },
      {
        title: "Gestão de Complexidade e Cognição",
        description: (
          <>
            Aplicação de neurociência cognitiva para manter clareza e performance sob pressão em incidentes críticos.
            Habilidade em traduzir problemas de negócio ambíguos em requisitos técnicos robustos.
          </>
        ),
        tags: [
          { name: "Neurociência", icon: "brain" },
          { name: "Tomada de Decisão", icon: "target" },
          { name: "Resolução de Problemas", icon: "puzzle" },
        ],
        images: [],
      },
      {
        title: "Comunicação e Visão Sistêmica",
        description: (
          <>
            Eficiência em destilar métricas de confiabilidade complexas para stakeholders técnicos e executivos. 
            Visão de fim a fim sobre o ciclo de vida do produto e cultura DevOps.
          </>
        ),
        tags: [
          { name: "Liderança Técnica", icon: "users" },
          { name: "Agile", icon: "activity" },
          { name: "Cultura DevOps", icon: "repeat" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
