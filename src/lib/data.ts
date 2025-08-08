export const timelineEvents = [
  {
    date: 'Aug 2023 – Present',
    company: 'Sterling Bank',
    role: 'Lead DevOps Engineer',
    achievement: 'Reduced deployment time by 50% and manual effort by 80% through robust automation and CI/CD pipelines.',
  },
  {
    date: 'Jul 2022 – Jul 2023',
    company: 'Zone Network',
    role: 'System Integrator',
    achievement: 'Achieved a 95% increase in Transaction Processing Speed (TPS) and integrated 5 new fintechs into the payment network.',
  },
  {
    date: 'May 2020 – Jun 2022',
    company: 'Alt Bank',
    role: 'Cloud Engineer',
    achievement: 'Built an API gateway handling 500 req/sec and cut down configuration errors by 25% using Infrastructure as Code.',
  },
  {
    date: 'Jun 2019 – Mar 2020',
    company: 'Tek Experts',
    role: 'DevOps Intern',
    achievement: 'Developed and maintained CI/CD pipelines for applications built with Node.js, Laravel, and Spring Boot.',
  },
   {
    date: '2014 – 2019',
    company: 'Ladoke Akintola University of Technology',
    role: 'B.Tech, Computer Science',
    achievement: 'Focused on systems engineering and distributed computing.',
  },
];

export const certifications = [
  'Certified Kubernetes Administrator (CKA)',
  'Microsoft Certified: Azure DevOps Engineer Expert',
  'HashiCorp Certified: Terraform Associate',
  'AWS Certified Solutions Architect – Associate',
];

export const bentoItems = [
  {
    title: 'Sterling Bank Migration',
    description: 'Migrated over 2,000 Azure App Services to a containerized OpenShift environment with zero downtime, using Helm and ArgoCD for seamless deployment.',
    className: 'lg:col-span-3',
    diagram: `
%%{init: {'theme':'dark'}}%%
graph LR
    A[2000+ Azure Apps] -->|Helm & ArgoCD| B((OpenShift Cluster))
    style A fill:#00E5FF22,stroke:#00E5FF
    style B fill:#FF007A22,stroke:#FF007A
    `,
  },
  {
    title: 'Zone Network TPS Boost',
    description: 'Engineered a 95% TPS boost across 6 integrated banks by optimizing the blockchain infrastructure and inter-bank communication protocols.',
    className: 'lg:col-span-3',
    diagram: `
%%{init: {'theme':'dark'}}%%
graph TD
    subgraph Before
      T1[500 TPS]
    end
    subgraph After
      T2[975 TPS]
    end
    T1 -->|Optimization| T2
    style T1 fill:#FF007A22,stroke:#FF007A
    style T2 fill:#00E5FF22,stroke:#00E5FF
    `,
  },
  {
    title: 'Alt Bank API Gateway',
    description: 'Designed and deployed a high-throughput API gateway capable of handling 500 requests/second, improving overall system resilience and scalability.',
    className: 'lg:col-span-2',
    diagram: `
%%{init: {'theme':'dark'}}%%
sequenceDiagram
    participant C as Client
    participant G as API Gateway
    participant S as Services
    C->>G: API Request (500/sec)
    G->>S: Route & Load Balance
    S-->>G: Response
    G-->>C: Aggregated Response
    `,
  },
  {
    title: 'Automated Security Scans',
    description: 'Integrated Veracode static analysis and Key Vault for secrets management into CI/CD pipelines, automating security and reducing vulnerabilities.',
    className: 'lg:col-span-2',
    diagram: `
%%{init: {'theme':'dark'}}%%
graph TD
    A[Code Push] --> B{CI Pipeline};
    B --> C[Veracode Scan];
    B --> D[Fetch Secrets from Key Vault];
    C --> E{Scan OK?};
    D --> F[Build & Deploy];
    E -- Yes --> F;
    E -- No --> G[Alert Team];
    style F fill:#00E5FF22,stroke:#00E5FF
    style G fill:#FF007A22,stroke:#FF007A
    `,
  },
   {
    title: 'Tech Stack',
    description: 'Kubernetes, Docker, Azure, AWS, GCP, Terraform, Ansible, Jenkins, ArgoCD, Prometheus, Grafana, Go, Python.',
    className: 'lg:col-span-2',
    diagram: `
%%{init: {'theme':'dark'}}%%
mindmap
  root((Tech Stack))
    (Cloud)
      ::icon(fa fa-cloud)
      AWS
      Azure
      GCP
    (Containers)
      ::icon(fa fa-box)
      Kubernetes
      Docker
      Helm
    (CI/CD)
      ::icon(fa fa-cogs)
      Jenkins
      ArgoCD
      GitHub Actions
    (IaC)
      ::icon(fa fa-code-branch)
      Terraform
      Ansible
    `,
  },
];

export const linkedinPosts = [
  {
    content: "Excited to share how we achieved zero-downtime migration for 2000+ services at Sterling Bank. It was a massive team effort centered on GitOps principles with ArgoCD. #DevOps #Kubernetes #CloudNative",
    time: '2d ago'
  },
  {
    content: "The future of finance is decentralized. At Zone, we're building the rails for seamless blockchain-based payments, and the performance gains are incredible. 95% TPS boost is just the beginning. #Fintech #Blockchain",
    time: '5d ago'
  },
  {
    content: "Just passed the Certified Kubernetes Administrator (CKA) exam! It was a challenging but rewarding experience. Deepening my K8s knowledge is key to building resilient systems. #CKA #Cloud #Certification",
    time: '1w ago'
  },
  {
    content: "Automation isn't just about speed, it's about reliability. By codifying our infrastructure and security policies, we've drastically reduced human error and improved our security posture. #IaC #DevSecOps",
    time: '2w ago'
  },
  {
    content: "Great discussion at KubeCon on multi-cluster observability with Prometheus and Thanos. Taking away some great ideas to implement.",
    time: '3w ago'
  },
  {
    content: "Just published a new blog post on setting up a high-throughput API Gateway on Kubernetes. Check it out on my Medium! #API #Kubernetes",
    time: '1mo ago'
  },
];

export const youtubeVideos = [
  {
    title: 'Scaling Kubernetes from Zero to Hero',
    conference: 'KubeCon North America 2023',
    thumbnail: 'https://placehold.co/600x400.png',
    url: 'https://youtube.com'
  },
  {
    title: 'DevSecOps: Integrating Security into Your Pipelines',
    conference: 'DevOpsDays London 2023',
    thumbnail: 'https://placehold.co/600x400.png',
    url: 'https://youtube.com'
  },
  {
    title: 'The Future of Fintech Infrastructure',
    conference: 'Africa Tech Summit 2022',
    thumbnail: 'https://placehold.co/600x400.png',
    url: 'https://youtube.com'
  },
];
