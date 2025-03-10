export interface Occupation {
  position: string
  company: string
  timeInterval: {
    from: string
    to: string
  }
  location: string
  description: string[]
  points?: string[]
}

export const work: Occupation[] = [
  {
    position: 'Web Developer (Full Stack)',
    company: 'Digital Lights, part of Wiser Technology',
    timeInterval: {
      from: '01/2022',
      to: '03/2025'
    },
    location: 'Sofia, Bulgaria',
    description: [
      'A company that specializes in Software Development and Consulting.',
      'Mobility, Automotive, Deep Tech and Space'
    ],
    points: [
      'Worked on 2 major projects and 3 smaller ones in between',
      'Used the best/most popular frameworks and technologies',
      'Dev lead for more than a year in my last project',
      'Mentored Junior colleagues',
      'Had to work very hard to catch up to university alumni'
    ]
  },
  {
    position: 'Paralegal --> Attorney',
    company: '"Daskalov, Daskalova and Partners" Law Firm',
    timeInterval: {
      from: '02/2017',
      to: '12/2021'
    },
    location: 'Sofia, Bulgaria',
    description: ['Attorneys that specialize in Civil and Company Law'],
    points: [
      'Worked on 100+ cases',
      'Mentored 2 interns',
      'Improved my social skills and etiquette dramatically',
      'Gained priceless friendships and contacts',
      'Experience turned out very useful in software development'
    ]
  }
]

export const volunteering: Occupation[] = [
  {
    position: 'Mentor and Trainer',
    company: 'Telerik Academy',
    timeInterval: {
      from: '01/2022',
      to: 'Present'
    },
    location: 'Sofia, Bulgaria',
    description: [
      'I have the privilege of being able to share my experience and help the students from Telerik Academy prepare for their programming journey. Since I graduated I have been called upon on 6 different occasions to be a mentor and once to teach a course.'
    ]
  }
]
