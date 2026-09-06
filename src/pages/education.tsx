import React, { useState } from 'react'
import { Card, ListGroup, Row, Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { EducationItem } from '../types/interfaces'
import FilterInput from '../components/filterInput'
import { checkItem } from '../helpers/filter'
import { GetSiteLink } from '../helpers/simple'
import { education } from '../data/education'

function GetEducationItem (item: EducationItem) {
  return <ListGroup.Item key={item.key}>
    <Row>
      <Col md={3} xl={3}>
        <Card.Title>{item.title}</Card.Title>
        <div>{item.location}</div>
		{item.site ? GetSiteLink(item.site) : ''}
        {item.from.toString()}{item.from !== item.to ? ' - ' + item.to.toString() : ''}
      </Col>
      <Col md={9} xl={9}>
        
        {item.faculty ? <p><b>Факультет:</b> {item.faculty}</p> : ''}
        {item.department ? <p><b>Кафедра:</b> {item.department}</p> : ''}
        {item.speciality ? <p><b>Специальность:</b> {item.speciality}</p> : ''}
        {item.value ? <p><b>Образование:</b> {item.value}</p> : ''}
        {item.description ? item.description : ''}
      </Col>
    </Row>
  </ListGroup.Item>
}

function Education () {
  const [educationFilter, setEducationFilter] = useState<string>('');
  const changeEducationFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducationFilter(event.target.value)
  }

  
  return <>
    <Head>
      <title key="title">Персональный сайт Михаила Киселева</title>
      <meta
            key="description"
            name="description"
            content="Персональный сайт фронтенд-разработчика, образование"
        />
        <meta
            key="og:type"
            name="og:type"
            content="profile"
        />
        <meta
            key="og:title"
            name="og:title"
            content="Персональный сайт Михаила Киселева, образование"
        />
        <meta
            key="og:description"
            name="og:description"
            content="Персональный сайт фронтенд-разработчика Киселева Михаила Александровича, информация об образовании"
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
    <FilterInput onChange={changeEducationFilter} value={educationFilter} />
			<ListGroup variant="flush">
				{(education as Array<EducationItem>).filter((item: EducationItem) => {
				return checkItem(item, educationFilter)
				}).map((item: EducationItem) => {
				return GetEducationItem(item)
				})}
	</ListGroup>
  </>
}

export default Education
