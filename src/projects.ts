export interface Project {
  title: string
  timeInterval: {
    from: string
    to: string
  }
  location?: string
  link?: string
  description: string
  points?: string[]
}

export const projects: Project[] = [
  {
    title: 'BMW SW Tools Dashboard',
    timeInterval: {
      from: '08/2023',
      to: '03/2025'
    },
    location: 'Digital Lights, part of Wiser Technology',
    description:
      "A set of tools designed to streamline the processes of internal management, storing, distribution, testing and analyzing of software created for BMW Group's vehicles",
    points: [
      'Technologies: TypeScript, React, React Query, MaterialUI, Express, MongoDB, Mongoose, Jest, Git, Jira',
      'I was the Development Lead in this project. Some of my responsibilities were to come up with feature ideas, designs and architecture of new tools.',
      'Actively participated in implementing best practices for project management, code quality and performance.',
      'Onboarded and guided 2 colleagues when they joined the project.'
    ]
  },
  {
    title: 'VW In-Car Web Apps',
    timeInterval: {
      from: '01/2022',
      to: '07/2023'
    },
    location: 'Digital Lights',
    description:
      '8 unique web apps found in the Infotainment systems of various models from VW and Skoda',
    points: [
      'Technologies: TypeScript, Angular 2+, RxJS, SCSS, Express, Jasmine + Karma, proprietary VW frameworks, Git, Jira',
      'Learned the Agile principles and Scrum framework using Jira for Project Management',
      'Worked in an international team of around 30 people covering all roles of the software development process',
      'Onboarded 3 junior colleagues into the project and mentored them until their promotion to mid-level developers'
    ]
  },
  {
    title: 'Various Practice Projects',
    timeInterval: {
      from: '06/2021',
      to: 'present'
    },
    description:
      'Side projects to practice, experiment and learn new technologies, as well as master the ones I am using in production',
    points: [
      'Front-end: Vue, Preact, Tailwind CSS, Redux Toolkit, NgRx',
      'Back-end and DB: NestJS, Fastify, PostgreSQL, Prisma',
      'Authentication: JWT, Auth0',
      'CI/CD: Docker, NGINX, Azure App Service',
      'Mobile: Flutter, Dart',
      'One example is this resume, built with Vue and Tailwind CSS.'
    ]
  }
]

export const prodTechStack: string[] = [
  'TypeScript',
  'Express',
  'MongoDB',
  'Mongoose',
  'React',
  'React Query',
  'Angular 2+',
  'RxJS',
  'SCSS',
  'MaterialUI',
  'Jest',
  'Jasmine',
  'Git',
  'Jira'
]

export const upskillTechStack: string[] = [
  'NestJS',
  'Fastify',
  'PostgreSQL',
  'Prisma',
  'Vue',
  'Preact',
  'Tailwind CSS',
  'Redux Toolkit',
  'NgRx',
  'JWT',
  'Auth0',
  'Docker',
  'NGINX',
  'Azure App Service',
  'Flutter',
  'Dart'
]
