/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '',
  // i18n не настроен намеренно: next export (npm run export) не поддерживает
  // международную маршрутизацию и падает с ошибкой
  // "i18n support is not compatible with next export".
  // Сайт одноязычный, locale по умолчанию всё равно не добавлялся бы к URL,
  // поэтому на адреса страниц отключение i18n не влияет.
  webpack: (config) => {
    // Импорт pdf Next сам не поддерживает: правило для «прочих» файлов
    // (file-loader из CRA) добавляется только при experimental.craCompat.
    // Поэтому добавляем своё: файл копируется в .next/static/files
    // и получает ссылку /_next/static/files/…
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/files/[name].[contenthash:8][ext]'
      }
    })
    return config
  }
}

module.exports = nextConfig