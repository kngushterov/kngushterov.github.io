export interface Occupation {
  position: string
  company: string
  timeInterval: {
    from: string
    to: string
  }
  location: string
  description: string
  points?: string[]
}

export const digitalLights: Occupation = {
  position: 'Web Developer',
  company: 'Digital Lights',
  timeInterval: {
    from: '01/2022',
    to: 'Present'
  },
  location: 'Sofia, Bulgaria',
  description:
    'A company that specializes in Software Development and Consulting.\nMobility, Automotive, Deep Tech and Space',
  points: [
    'Worked on 8 WebApps for the vehicles of German automotive brands',
    'Worked on 4 internal company projects',
    'Was Interim Dev Lead for 6 months',
    'Mentored 3 Junior colleagues'
  ]
}

export const telerikAcademy: Occupation = {
  position: 'Mentor and Trainer',
  company: 'Telerik Academy',
  timeInterval: {
    from: '01/2022',
    to: 'Present'
  },
  location: 'Sofia, Bulgaria',
  description:
    'I have the privilege of being able to share my experience and help the students from Telerik Academy prepare for their programming journey.\nSince I graduated I have been called upon on 4 different occasions to be a mentor and once to teach a course.'
}
