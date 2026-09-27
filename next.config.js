/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: ''
  // i18n не настроен намеренно: next export (npm run export) не поддерживает
  // международную маршрутизацию и падает с ошибкой
  // "i18n support is not compatible with next export".
  // Сайт одноязычный, locale по умолчанию всё равно не добавлялся бы к URL,
  // поэтому на адреса страниц отключение i18n не влияет.
}

module.exports = nextConfig