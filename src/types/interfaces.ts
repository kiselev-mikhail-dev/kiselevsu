export interface AboutItem {
  key: number,
  from: number,
  to: number,
  title: string,
  image: Partial<string & boolean>,
  site: Partial<Site & boolean>,
  location: string,
  // eslint-disable-next-line
  description: any,
  tags: string
}

export interface EducationItem extends AboutItem {
  faculty: Partial<string & boolean>,
  department: Partial<string & boolean>,
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