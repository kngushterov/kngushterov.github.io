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
    position: 'Full Stack Web Developer',
    company: 'Digital Lights, part of Wiser Technology',
    timeInterval: {
      from: '01/2022',
      to: '03/2025'
    },
    location: 'Sofia, Bulgaria',
    description: ['"A company that specializes in Software Development and Consulting"'],
    points: [
      'Learned the basics of TypeScript, Angular 2+ and Express, onboarded myself and started contributing within 2 weeks.',
      'Worked incredibly hard to catch up to university alumni. Coming from a different field, I always had a chip on my shoulder.',
      'Worked on 2 major projects and contributed in 3 smaller ones in spare time.',
      'Got promoted to mid-level developer in 8 months based on my performance and newly gained knowledge and skills.',
      'Onboarded and mentored 5 colleagues joining the respective project after me. My mentoring experience from Telerik Academy helped a lot.',
      'Worked in an international team of around 30 people covering all roles of the software development process where I learned the Agile principles and the Scrum framework.',
      'Got promoted to Development Lead in my last project. I held my own in meetings with the client and was responsible for the architecture of the project.',
      'Used some of the most popular frameworks and technologies in production.',
      'Worked equally well on the back end and front end. Usually implemented new features on both sides.',
      'Always focused on improving the code quality and the performance of the applications.',
      'Stayed curious and used my free time to learn new technologies and frameworks to round out my web development stack.'
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
    description: ['"Attorneys that specialize in Civil and Company Law"'],
    points: [
      'Worked on 100+ cases',
      'Mentored 2 interns',
      'Improved my social skills and etiquette dramatically',
      'Gained priceless friendships and contacts',
      'Relevant skills turned out very useful in software development'
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
    description: ['"The top training hub for aspiring IT professionals and career changers"'],
    points: [
      'I have the privilege of being able to share my experience and help the students in Telerik Academy prepare for their programming journey. Since I graduated I have been called upon on 6 different occasions to be a mentor and once to teach a course.',
      'Besides being immensely rewarding, it has also improved my communication and leadership skills as well as honed my knowledge of best practices and the ability to explain complex topics in a simple way.'
    ]
  }
]
