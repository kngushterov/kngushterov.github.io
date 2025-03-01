export interface Project {
  title: string
  timeInterval: {
    from: string
    to: string
  }
  location: string
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
      'Technologies: TypeScript, React, MaterialUI, Express, MongoDB, Jest',
      'I was a development lead in this project. Some of my responsibilities were to come up with feature ideas, designs and architecture of new tools.'
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
      'Technologies: TypeScript, Angular, SCSS, Express, Jasmine + Karma',
      'Learned the Scrum framework there through Jira',
      "Largest team I've been a part of - around 20 people"
    ]
  },
  {
    title: 'Share the Ball',
    timeInterval: {
      from: '11/2021',
      to: '12/2021'
    },
    location: 'Telerik Academy',
    link: 'gitlab.com/kngushterov/share-the-ball',
    description: 'A social network aimed at basketball enthusiasts',
    points: [
      'Technologies: JavaScript, React, CSS, Bootstrap',
      'My final project in Telerik Academy',
      'Was voted "Best Project" by the Academy\'s partners',
      'Shows my inexperience back then'
    ]
  }
]

export const techStack: string[] = [
  'TypeScript',
  'Angular',
  'Tailwind CSS',
  'Jest',

  'React',
  'MongoDB',
  'SASS',
  'Jasmine',

  'Express',
  'SQL',
  'Vue'
]
