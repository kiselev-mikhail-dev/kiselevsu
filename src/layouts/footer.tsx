function Footer() {
  // Год берётся из локального времени, поэтому текст на сервере и клиенте
  // может различаться (смена года, другой часовой пояс).
  // suppressHydrationWarning отключает ошибку гидратации для этого узла.
  return <footer>
    <p className="text-center text-muted" suppressHydrationWarning>© Киселев М.А., {new Date().getFullYear()}. Вcе права защищены.</p>
    <p className="text-center text-muted">Исходный код этого сайта <a title="gitHub" rel="nofollow" href="https://github.com/kiselev-mikhail-dev/kiselevsu">доступен на GitHub</a>.</p>
  </footer>
}

export default Footer