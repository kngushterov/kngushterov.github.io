export interface Education {
  degree: string
  school: string
  timeInterval: {
    from: string
    to: string
  }
  location: string
  grade: number
  maxGrade: number
}

export const educations: Education[] = [
  {
    degree: 'Alpha JavaScript Track',
    school: 'Telerik Academy',
    timeInterval: {
      from: '06/2021',
      to: '12/2021'
    },
    location: 'Sofia, Bulgaria',
    grade: 98,
    maxGrade: 100
  },
  {
    degree: 'Master of Law',
    school: 'Sofia University "St. Kliment Ohridski"',
    timeInterval: {
      from: '10/2014',
      to: '09/2019'
    },
    location: 'Sofia, Bulgaria',
    grade: 5.6,
    maxGrade: 6
  }
]
