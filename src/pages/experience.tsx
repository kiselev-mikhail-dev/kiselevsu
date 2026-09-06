import React, { useState } from 'react'
import { Card, ListGroup, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'react-bootstrap/Image'
import { WorkItem } from '../types/interfaces'
import FilterInput from '../components/filterInput'
import { checkItem } from '../helpers/filter'
import { GetSiteLink } from '../helpers/simple'
import { work } from '../data/experience'

const renderTooltip = (props, text) => {
	console.log(props);
    return <Tooltip id="button-tooltip" {...props}>
		{text}
    </Tooltip>
}

function GetWorkItem (item: WorkItem) {
  const ogrn = item.companyOGRN.toString()
  return <ListGroup.Item key={item.key}>
    <Row>
      <Col md={3} xl={2}>
        <Card.Title>
          {item.title}
			  {item.companyDescription?.length>0 && 
			  <> {" "}
				<OverlayTrigger
					placement="right"
					delay={{ show: 250, hide: 400 }}
					overlay={(props)=>renderTooltip(props, item.companyDescription)}
				>
					<Icon.InfoCircleFill />
				</OverlayTrigger>
			  </>}
        </Card.Title>
        <Card.Subtitle>
          <a target="_blank" rel="noreferrer" href={ogrn.length === 13 ? 'https://zachestnyibiznes.ru/company/ul/' + ogrn : 'https://zachestnyibiznes.ru/company/ip/' + ogrn}>{item.company}</a>
        </Card.Subtitle>
        <div>{item.location}</div>
		{item.site ? GetSiteLink(item.site) : ''}
        <br />
        {item.from.toString()}{item.from !== item.to ? ' - ' + item.to.toString() : ''}
      </Col>
      <Col md={9} xl={10}>
        <p><b>Позиция:</b> {item.position} {item.positionDescription.length ? <span className="text-muted">({item.positionDescription})</span> : ''}</p>
        {item.description}
      </Col>
    </Row>
  </ListGroup.Item>
}

function Experience () {
  const [workFilter, setWorkFilter] = useState<string>('')
  const changeWorkFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkFilter(event.target.value)
  }

  
  return <>
    <Head>
      <title key="title">Персональный сайт Михаила Киселева</title>
      <meta
            key="description"
            name="description"
            content="Персональный сайт фронтенд-разработчика"
        />
        <meta
            key="og:type"
            name="og:type"
            content="profile"
        />
        <meta
            key="og:title"
            name="og:title"
            content="Персональный сайт Михаила Киселева"
        />
        <meta
            key="og:description"
            name="og:description"
            content="Персональный сайт фронтенд-разработчика"
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
    <FilterInput onChange={changeWorkFilter} value={workFilter} />
	<ListGroup variant="flush">
			{(work as Array<WorkItem>).filter((item: WorkItem) => {
				return checkItem(item, workFilter)
			}).map((item: WorkItem) => {
				return GetWorkItem(item)
			})}
	</ListGroup>
  </>
}

export default Experience
