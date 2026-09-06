export type Site = {
    url: string,
    exists:boolean
}
export type ProjectsItem = {
  key: number,
  title: string,
  description: string
  technologies: string[]
  pics: string[],
  site: Site
}