function Footer() {
  return <footer>
    <p className="text-center text-muted">© Киселев М.А., {new Date().getFullYear()}. Вcе права защищены.</p>
    <p className="text-center text-muted">Исходный код этого сайта <a title="Последних изменений нет, т.к. нет доступа к аккаунту" rel="nofollow" href="https://github.com/mikhail-a-kiselev/kiselevsu">доступен на GitHub</a>.</p>
  </footer>
}

export default Footer