export interface Project {
  title: string
  timeInterval: {
    from: string
    to: string
  }
  location: string
  link: string
  description: string
  points?: string[]
}

export const projects: Project[] = [
  {
    title: 'Acoustics.Digital',
    timeInterval: {
      from: '06/2023',
      to: '07/2023'
    },
    location: 'Digital Lights',
    link: 'acoustics.digital',
    description:
      'An informative page for a product in development designed to appeal to potential investors',
    points: ['Technologies: TypeScript, Angular, Figma (for the logo)']
  },
  {
    title: 'Hush Hub',
    timeInterval: {
      from: '05/2023',
      to: '06/2023'
    },
    location: 'Telerik Academy',
    link: 'hushhub.dev',
    description:
      'A chat app with all the expected modern bells and whistles developed as a final project in Telerik Academy',
    points: [
      'Technologies: TypeScript, React, Firebase',
      'I contributed only as a mentor to the team'
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
  'React',
  'Vue',
  'Express',
  'HTML',
  'SASS',
  'Tailwind CSS'
]
