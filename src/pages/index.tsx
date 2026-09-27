import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import Head from 'next/head'
import { useRouter } from 'next/router'

function Home () {
  const router = useRouter()

  const experienceClick = (event: React.MouseEvent) => {
    event.preventDefault()
    router.push('/experience')
  }
  const educationClick = (event: React.MouseEvent) => {
    event.preventDefault()
    router.push('/education')
  }
  return <>
    <Head>
      <title key="title">Михаил Александрович Киселев, frontend-разработчик</title>
      <meta
            key="description"
            name="description"
            content="Персональный сайт фронтенд-разработчика Михаила Киселева"
        />
        <meta
            key="og:type"
            name="og:type"
            content="profile"
        />
        <meta
            key="og:title"
            name="og:title"
            content="Михаил Александрович Киселев, frontend-разработчик"
        />
        <meta
            key="og:description"
            name="og:description"
            content="Персональный сайт фронтенд-разработчика Киселева Михаила Александровича"
        />
        <meta
            key="og:url"
            name="og:url"
            content="https://kiselev.su/"
        />
        <meta
            key="og:image"
            name="og:image"
            content=""
        />
    </Head>
    <Card>
      <Card.Body>
        <Card.Text>
			<strong>Киселев Михаил Александрович</strong>, frontend-разработчик.
        </Card.Text>
        <Card.Text>
          Родился 22 августа 1989 года. Гражданин Российской Федерации.
        </Card.Text>
		<Card.Text>
		  Опыт коммерческой разработки более 10 лет.{" "}
		  <a href="/experience"
        onClick={experienceClick}
      >Подробнее</a>
		</Card.Text>
    <Card.Text>
			Образование: два высших (Прикладная информатика и Менеждмент организации){" "}
			  <a href="/education"
          onClick={educationClick}
        >Подробнее</a>
		</Card.Text>
		<Card.Text>
			Проживаю, в основном, в г.Ульяновске (Россия).<br />
			Готов к командировкам. Водительские права категории B, несколько автомобилей и загранпаспорт имеются.
		</Card.Text>
      </Card.Body>
    </Card>
  </>
}

export default Home
