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
  languages: ["Português"],
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
        description: <>Mestrado Profissional em Matemática Aplicada e Computacional (Em andamento).</>,
      },
      {
        name: "Universidade Pitágoras Unopar Anhanguera",
        description: <>
          • Pós-Graduação em Neurociências e Comportamento (Em andamento).<br/>
          • Especialização em Engenharia de Software com Ênfase em Qualidade e Teste.<br/>
          • Especialização em Engenharia de Confiabilidade de Site (SRE).<br/>
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
    title: "Certificações e Cursos",
    categories: [
      {
        title: "Cloud, DevOps & Infraestrutura (Foco SRE)",
        items: [
          { name: "AWS Cloud Practitioner Essentials", provider: "AWS", date: "2020", hours: "6h", file: "aws-cloud-practitioner.pdf" },
          { name: "Introduction to Amazon Elastic Compute Cloud (EC2)", provider: "AWS", date: "2020", hours: "-", file: "aws-ec2-intro.pdf" },
          { name: "Microsoft AZ-900 Parte 1: Azure Fundamentals", provider: "Alura", date: "2022", hours: "8h", file: "alura-az900-parte1.pdf" },
          { name: "Microsoft AZ-900 Parte 2: Azure Fundamentals", provider: "Alura", date: "2022", hours: "8h", file: "alura-az900-parte2.pdf" },
          { name: "Microsoft AZ-900 Parte 3: Azure Fundamentals", provider: "Alura", date: "2022", hours: "8h", file: "alura-az900-parte3.pdf" },
          { name: "Microsoft AZ-900 Parte 4: Azure Fundamentals", provider: "Alura", date: "2022", hours: "8h", file: "alura-az900-parte4.pdf" },
          { name: "Microsoft AZ-900: Simulado Comentado", provider: "Alura", date: "2022", hours: "12h", file: "alura-az900-simulado.pdf" },
          { name: "Infraestrutura como Código: Ansible e Terraform na AWS", provider: "Alura", date: "2023", hours: "8h", file: "alura-iac-ansible-terraform.pdf" },
          { name: "Docker: Criando e Gerenciando Containers", provider: "Alura", date: "2023", hours: "10h", file: "alura-docker-containers.pdf" },
          { name: "Integração Contínua: Pipeline Docker no Github Actions", provider: "Alura", date: "2023", hours: "8h", file: "alura-ci-docker-github.pdf" },
          { name: "Integração Contínua: Testes Automatizados e Pipeline", provider: "Alura", date: "2023", hours: "6h", file: "alura-ci-testes-pipeline.pdf" },
          { name: "Observabilidade: Métricas com Prometheus", provider: "Alura", date: "2023", hours: "10h", file: "alura-observabilidade-prometheus.pdf" },
          { name: "Monitoramento: Prometheus, Grafana e Alertmanager", provider: "Alura", date: "2023", hours: "12h", file: "alura-monitoramento-grafana.pdf" },
          { name: "Introduction to Cloud Computing", provider: "IBM (Coursera)", date: "2020", hours: "-", file: "coursera-ibm-cloud-computing.pdf" },
          { name: "Introduction to Enterprise Computing", provider: "IBM (Coursera)", date: "2019", hours: "-", file: "coursera-ibm-enterprise.pdf" },
          { name: "IBM z/OS Mainframe Practitioner (Professional Certificate)", provider: "IBM (Coursera)", date: "2019", hours: "-", file: "coursera-ibm-mainframe-practitioner.pdf" },
          { name: "Basic System Programming on IBM Z", provider: "IBM (Coursera)", date: "2019", hours: "-", file: "coursera-ibm-system-programming.pdf" },
          { name: "Getting Started on Mainframe with z/OS", provider: "IBM (Coursera)", date: "2019", hours: "-", file: "coursera-ibm-getting-started-zos.pdf" },
          { name: "System Administration and IT Infrastructure Services", provider: "Google (Coursera)", date: "2019", hours: "-", file: "coursera-google-sysadmin.pdf" },
          { name: "Google IT Support (Professional Certificate)", provider: "Google (Coursera)", date: "2019", hours: "-", file: "coursera-google-it-support.pdf" }
        ]
      },
      {
        title: "Linux & Sistema Operacional",
        items: [
          { name: "Linux I: Conhecendo e Utilizando o Terminal", provider: "Alura", date: "2022", hours: "4h", file: "alura-linux-1.pdf" },
          { name: "Linux II: Programas, Processos e Pacotes", provider: "Alura", date: "2022", hours: "8h", file: "alura-linux-2.pdf" },
          { name: "Certificação Linux LPI Essentials Parte 1: Evolution", provider: "Alura", date: "2022", hours: "8h", file: "alura-lpi-parte1.pdf" },
          { name: "Certificação Linux LPI Essentials Parte 2: Open Source", provider: "Alura", date: "2022", hours: "8h", file: "alura-lpi-parte2.pdf" },
          { name: "Certificação Linux LPI Essentials Parte 3: Command Line", provider: "Alura", date: "2022", hours: "8h", file: "alura-lpi-parte3.pdf" },
          { name: "Certificação Linux LPI Essentials Parte 12: Security", provider: "Alura", date: "2022", hours: "4h", file: "alura-lpi-parte12.pdf" },
          { name: "Linux Onboarding: Usando a CLI", provider: "Alura", date: "2022", hours: "8h", file: "alura-linux-onboarding-cli.pdf" },
          { name: "Linux Onboarding: Localizando Arquivos", provider: "Alura", date: "2022", hours: "8h", file: "alura-linux-onboarding-find.pdf" },
          { name: "Windows Prompt: Linha de Comando", provider: "Alura", date: "2022", hours: "5h", file: "alura-windows-prompt.pdf" },
          { name: "Vim: Boas Práticas e Edição no Terminal", provider: "Alura", date: "2022", hours: "20h", file: "alura-vim.pdf" },
          { name: "Operating Systems and You: Becoming a Power User", provider: "Google (Coursera)", date: "2019", hours: "-", file: "coursera-google-os-poweruser.pdf" }
        ]
      },
      {
        title: "Segurança da Informação (Cybersecurity)",
        items: [
          { name: "Formação: Segurança de Aplicações", provider: "Alura", date: "2022", hours: "50h", file: "alura-formacao-seguranca.pdf" },
          { name: "Segurança de Redes: Vulnerabilidades de Servidores", provider: "Alura", date: "2022", hours: "10h", file: "alura-seguranca-redes-vuln.pdf" },
          { name: "Segurança de Redes: Firewall com PFSense e IPTables", provider: "Alura", date: "2022", hours: "10h", file: "alura-seguranca-firewall.pdf" },
          { name: "Segurança Web: Vulnerabilidades e OWASP", provider: "Alura", date: "2022", hours: "12h", file: "alura-seguranca-web-owasp.pdf" },
          { name: "Segurança Web em Java: SQL Injection e Força Bruta", provider: "Alura", date: "2022", hours: "8h", file: "alura-seguranca-java-1.pdf" },
          { name: "Segurança Web em Java Parte 2: XSS e Uploads", provider: "Alura", date: "2022", hours: "6h", file: "alura-seguranca-java-2.pdf" },
          { name: "IT Security: Defense against the digital dark arts", provider: "Google (Coursera)", date: "2019", hours: "-", file: "coursera-google-it-security.pdf" },
          { name: "Introduction to Cybersecurity", provider: "Cisco", date: "2020", hours: "-", file: "cisco-cybersecurity.pdf" }
        ]
      },
      {
        title: "Redes e Telecomunicações",
        items: [
          { name: "Redes Parte 1: Conceitos e Prática", provider: "Alura", date: "2022", hours: "10h", file: "alura-redes-1.pdf" },
          { name: "Redes Parte 2: Projeto do Cliente ao Provedor", provider: "Alura", date: "2022", hours: "10h", file: "alura-redes-2.pdf" },
          { name: "Redes Parte 3: Listas de Controle e Políticas", provider: "Alura", date: "2022", hours: "5h", file: "alura-redes-3.pdf" },
          { name: "Redes Parte 4: Protocolos de Roteamento e IPv6", provider: "Alura", date: "2022", hours: "8h", file: "alura-redes-4.pdf" },
          { name: "Redes Parte 5: Wi-Fi", provider: "Alura", date: "2022", hours: "6h", file: "alura-redes-5.pdf" },
          { name: "Redes Onboarding: Uma Perspectiva Prática", provider: "Alura", date: "2022", hours: "8h", file: "alura-redes-onboarding.pdf" },
          { name: "The Bits and Bytes of Computer Networking", provider: "Google (Coursera)", date: "2019", hours: "-", file: "coursera-google-networking.pdf" },
          { name: "FiberHome BroadBand UNM2000 (NMS)", provider: "Entelco", date: "2020", hours: "10h", file: "entelco-fiberhome.pdf" },
          { name: "Issabel Communication Server (VoIP)", provider: "Tecamp", date: "2020", hours: "23h", file: "tecamp-issabel.pdf" }
        ]
      },
      {
        title: "Desenvolvimento Mobile (Flutter)",
        items: [
          { name: "Flutter: Criando um App", provider: "Alura", date: "2022", hours: "15h", file: "alura-flutter-criando-app.pdf" },
          { name: "Flutter com Web API: Integrando sua App", provider: "Alura", date: "2022", hours: "8h", file: "alura-flutter-webapi.pdf" },
          { name: "Flutter: Entendendo Comunicação HTTP", provider: "Alura", date: "2022", hours: "10h", file: "alura-flutter-http.pdf" },
          { name: "Persistência com Flutter: Armazenamento Interno", provider: "Alura", date: "2022", hours: "8h", file: "alura-flutter-persistencia.pdf" },
          { name: "Flutter: Gerenciamento de Estados com Provider", provider: "Alura", date: "2022", hours: "8h", file: "alura-flutter-provider.pdf" },
          { name: "Flutter: Firebase Crashlytics e Erros em Tempo Real", provider: "Alura", date: "2022", hours: "10h", file: "alura-flutter-firebase.pdf" },
          { name: "Flutter: Streams de Programação Reativa com Bloc", provider: "Alura", date: "2022", hours: "8h", file: "alura-flutter-bloc.pdf" }
        ]
      },
      {
        title: "Desenvolvimento Web & Backend",
        items: [
          { name: "Arquitetura de Sistemas Avançado", provider: "DIO", date: "2019", hours: "3h", file: "dio-arquitetura.pdf" },
          { name: "Arquitetura de Computadores: Como funciona", provider: "Alura", date: "2022", hours: "8h", file: "alura-arquitetura-computadores.pdf" },
          { name: "Laravel: Criando uma Aplicação com MVC", provider: "Alura", date: "2023", hours: "8h", file: "alura-laravel-mvc.pdf" },
          { name: "PHP: Conceitos, Dados, Loops", provider: "Alura", date: "2022", hours: "6h", file: "alura-php-conceitos.pdf" },
          { name: "Avançando com PHP: Arrays, Strings, Web", provider: "Alura", date: "2022", hours: "8h", file: "alura-php-avancado.pdf" },
          { name: "PCAP: Programming Essentials in Python", provider: "Python Institute", date: "2020", hours: "-", file: "python-institute-pcap.pdf" },
          { name: "Git e GitHub: Repositório, Commit e Versões", provider: "Alura", date: "2022", hours: "8h", file: "alura-git-github.pdf" },
          { name: "HTML5 e CSS3 Parte 1: Crie uma Página da Web", provider: "Alura", date: "2022", hours: "8h", file: "alura-html-css-1.pdf" },
          { name: "HTML5 e CSS3 Parte 2: Posicionamento e Listas", provider: "Alura", date: "2022", hours: "8h", file: "alura-html-css-2.pdf" },
          { name: "HTML5 e CSS3 Parte 3: Formulários e Tabelas", provider: "Alura", date: "2022", hours: "8h", file: "alura-html-css-3.pdf" },
          { name: "WordPress: Sites com Elementor", provider: "Alura", date: "2022", hours: "8h", file: "alura-wordpress-elementor.pdf" },
          { name: "WordPress: Integração WhatsApp", provider: "Alura", date: "2022", hours: "8h", file: "alura-wordpress-whatsapp.pdf" },
          { name: "WordPress: Criação de um Tema Personalizado", provider: "Alura", date: "2022", hours: "10h", file: "alura-wordpress-tema.pdf" },
          { name: "Plugin no WordPress: Widget e Shortcode", provider: "Alura", date: "2022", hours: "8h", file: "alura-wordpress-plugin.pdf" },
          { name: "SEO WordPress: Otimize o Ranqueamento", provider: "Alura", date: "2022", hours: "4h", file: "alura-wordpress-seo.pdf" },
          { name: "SEO: Otimização de Sites", provider: "Alura", date: "2022", hours: "8h", file: "alura-seo-sites.pdf" }
        ]
      },
      {
        title: "Gestão, Métodos Ágeis e Dados",
        items: [
          { name: "COBIT 5 Foundations Parte 1: Governança", provider: "Alura", date: "2022", hours: "14h", file: "alura-cobit-1.pdf" },
          { name: "COBIT 5 Foundations Parte 2: Princípios", provider: "Alura", date: "2022", hours: "9h", file: "alura-cobit-2.pdf" },
          { name: "Scrum: Agilidade em seu Projeto", provider: "Alura", date: "2022", hours: "10h", file: "alura-scrum.pdf" },
          { name: "Agilidade: Promovendo a Transformação Ágil", provider: "Alura", date: "2022", hours: "6h", file: "alura-agilidade-transformacao.pdf" },
          { name: "A Empresa Ágil: Business Agility", provider: "Alura", date: "2022", hours: "6h", file: "alura-empresa-agil.pdf" },
          { name: "Lean Startup: Primeiros Passos", provider: "Alura", date: "2022", hours: "5h", file: "alura-lean-startup.pdf" },
          { name: "Gestão de Projetos (Especialização)", provider: "USP/UCI (Coursera)", date: "2020", hours: "-", file: "coursera-usp-gestao-projetos-specialization.pdf" },
          { name: "Iniciação e Planejamento de Projetos", provider: "USP/UCI (Coursera)", date: "2020", hours: "-", file: "coursera-usp-iniciacao-projetos.pdf" },
          { name: "Orçamento e Cronograma de Projetos", provider: "USP/UCI (Coursera)", date: "2020", hours: "-", file: "coursera-usp-orcamento-projetos.pdf" },
          { name: "Gestão de Riscos e Mudanças em Projetos", provider: "USP/UCI (Coursera)", date: "2020", hours: "-", file: "coursera-usp-riscos-projetos.pdf" },
          { name: "Projeto Aplicado - Gestão de Projetos", provider: "USP/UCI (Coursera)", date: "2020", hours: "-", file: "coursera-usp-projeto-aplicado.pdf" },
          { name: "Introduction to Artificial Intelligence (AI)", provider: "IBM (Coursera)", date: "2020", hours: "-", file: "coursera-ibm-ai-intro.pdf" },
          { name: "What is Data Science?", provider: "IBM (Coursera)", date: "2020", hours: "-", file: "coursera-ibm-datascience.pdf" },
          { name: "Key Technologies for Business (Specialization)", provider: "IBM (Coursera)", date: "2020", hours: "-", file: "coursera-ibm-key-technologies.pdf" },
          { name: "Technical Support Fundamentals", provider: "Google (Coursera)", date: "2019", hours: "-", file: "coursera-google-tech-support.pdf" }
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
        image: { src: '/images/whatisup-cover.png', alt: 'What Is Up Project', width: 16, height: 9 },
        link: null,
        comingSoon: true
      },
      {
        title: "WePets",
        description: "Gestão de identidade descentralizada para rastreabilidade animal via IoT (NFC). Foca em privacidade (LGPD) e ofuscação de dados com Hashids.",
        techStack: ["Golang", "Next.js", "IoT/NFC", "Hashids", "Cloudflare"],
        image: { src: '/images/wepets-cover.jpg', alt: 'What Is Up Project', width: 16, height: 9 },
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
            Foco em alta disponibilidade, resiliência e automação de processos críticos. 
            Especialista em arquitetura distribuída e escalabilidade e observabilidade sistêmica.
          </>
        ),
        tags: [
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Docker", icon: "docker" },
          { name: "Terraform", icon: "terraform" },
          { name: "Prometheus", icon: "prometheus" },
          { name: "Alert Manager", icon: "alertmanager" },
          { name: "Grafana", icon: "grafana" },
          { name: "Zabbix", icon: "zabbix" },
          { name: "GCP", icon: "gcp" },
          { name: "AWS", icon: "aws" },
          { name: "Azure", icon: "azure" },
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
          { name: "ADVPL Protheus", icon: "advpl" },
          { name: "Golang", icon: "go" },
          { name: "Python", icon: "python" },
          { name: "Flutter", icon: "flutter" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Node.js", icon: "nodejs" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "OracleDB", icon: "oracle" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Firebase", icon: "firebase" },
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
          { name: "Autodidatismo", icon: "self-education" },
          { name: "Alta Cognição", icon: "cognition" },
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
          { name: "PMBOK", icon: "pmbok" },
          { name: "Scrum", icon: "scrum" },
          { name: "Cobit 5", icon: "cobit" },
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
