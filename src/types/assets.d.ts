/**
 * Ассеты, которые импортируются как ссылка на файл (их обрабатывает webpack
 * правилом из next.config.js).
 */
declare module '*.pdf' {
  const fileUrl: string
  export default fileUrl
}
