export interface Skill {
  name: string
  level?: string
  description?: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "CI/CD Tools",
    description: "Continuous Integration and Deployment automation",
    skills: [
      {
        name: "Jenkins",
        level: "Advanced",
        description: "Automation server for CI/CD pipelines",
      },
      {
        name: "GitHub Actions",
        level: "Intermediate",
        description: "Cloud-native CI/CD platform",
      },
    ],
  },
  {
    title: "Containerization & Orchestration",
    description: "Container management and orchestration platforms",
    skills: [
      {
        name: "Docker",
        level: "Expert",
        description: "Containerization platform",
      },
      {
        name: "Kubernetes",
        level: "Intermediate",
        description: "Container orchestration system",
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Cloud platforms and infrastructure as code",
    skills: [
      {
        name: "AWS",
        level: "Advanced",
        description: "Amazon Web Services cloud platform",
      },
      {
        name: "Terraform",
        level: "Intermediate",
        description: "Infrastructure as Code tool",
      },
      {
        name: "Ansible",
        level: "Intermediate",
        description: "Configuration management and automation",
      },
    ],
  },
  {
    title: "Scripting & Programming",
    description: "Programming languages and scripting tools",
    skills: [
      {
        name: "Bash",
        level: "Intermediate",
        description: "Shell scripting and automation",
      },
      {
        name: "Python",
        level: "Intermediate",
        description: "Programming language for automation",
      },
    ],
  },
  {
    title: "Monitoring & Observability",
    description: "System monitoring and performance tracking",
    skills: [
      {
        name: "Prometheus",
        level: "Intermediate",
        description: "Monitoring and alerting toolkit",
      },
      {
        name: "Grafana",
        level: "Advanced",
        description: "Analytics and monitoring platform",
      },
    ],
  },
  {
    title: "Security & Compliance",
    description: "Security scanning and compliance tools",
    skills: [
      {
        name: "Trivy",
        level: "Beginner",
        description: "Vulnerability scanner for containers",
      },
      {
        name: "SonarQube",
        level: "Intermediate",
        description: "Code quality and security analysis",
      },
      {
        name: "Wazuh",
        level: "Beginner",
        description: "Security monitoring and threat detection",
      },
    ],
  },
  {
    title: "Source Control & Collaboration",
    description: "Version control and team collaboration tools",
    skills: [
      {
        name: "Git",
        level: "Expert",
        description: "Distributed version control system",
      },
      {
        name: "GitHub",
        level: "Expert",
        description: "Git repository hosting and collaboration",
      },
    ],
  },
  {
    title: "Web Servers & Networking",
    description: "Web servers and networking infrastructure",
    skills: [
      {
        name: "Apache",
        level: "Intermediate",
        description: "HTTP web server",
      },
      {
        name: "Nginx",
        level: "Intermediate",
        description: "Web server and reverse proxy",
      },
    ],
  },
]

// Legacy export for backward compatibility
export const skillsData = skillCategories.flatMap((category) => category.skills)
