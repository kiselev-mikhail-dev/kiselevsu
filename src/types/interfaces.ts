import { Site } from './simple'

export interface AboutItem {
  key: number,
  from: number,
  to: number | string,
  title: string,
  image: string | false,
  site: Site | false,
  location: string,
  // eslint-disable-next-line
  description: any,
  tags: string
}

export interface EducationItem extends AboutItem {
  faculty: string | false,
  department: string | false,
  speciality: string,
  value: string,
}

export interface WorkItem extends AboutItem {
  company: string,
  companyOGRN: number,
  companyDescription:string,
  position: string,
  positionDescription: string,
  portfolio:number[]
}