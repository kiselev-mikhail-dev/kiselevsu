import React from 'react'
import { Card, Col, Row, Carousel, Badge, Modal } from 'react-bootstrap'
import SiteLink from '../components/siteLink'
import { Site, ProjectsItem } from '../types/simple'
import { projects } from '../data/portfolio'
import Head from 'next/head'
import { useRouter } from 'next/router'




function Portfolio () {
  const router = useRouter();
  const { id } = router.query;
  const closeProject = () => router.push('/portfolio');
  const openProject = (key) => router.push({query:{id:key}});
  const selectedProject = projects.find((item)=>item.key==id);
  
  return <>
    <Head>
      <title key="title">Портфолио Михаила Киселева</title>
      <meta
            key="description"
            name="description"
            content="Работы Киселева Михаила Александровича"
        />
        <meta
            key="og:type"
            name="og:type"
            content="profile"
        />
        <meta
            key="og:title"
            name="og:title"
            content="Портфолио Михаила Киселева"
        />
        <meta
            key="og:description"
            name="og:description"
            content="Работы Киселева Михаила Александровича"
        />
        <meta
            key="og:url"
            name="og:url"
            content="https://kiselev.su/portfolio"
        />
        <meta
            key="og:image"
            name="og:image"
            content=""
        />
    </Head>
    <Row>
      {projects.map((item) => {
        return <Col xs={12} sm={6} md={4} className="mb-3" key={item.key}>
          <Card onClick={()=>openProject(item.key)}>
            {(() => {
              switch (item.pics.length) {
                case 0:
                  return ''
                case 1:
                  return <div style={{ backgroundImage: `url('${item.pics[0]}')` }} className="carousel-item-image"></div>
                default:
                  return <Carousel controls={false}>
                  {item.pics.map((pic, j) => {
                    return <Carousel.Item key={j}>
                      <div style={{ backgroundImage: `url('${pic}')` }} className="carousel-item-image"></div>
                      </Carousel.Item>
                  })
                }
                </Carousel>
              }
            })()
            }
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            {item.technologies.map((technology, j) => {
              return <span key={j}><Badge bg="primary">{technology}</Badge> </span>
            })}
            </Card.Body>
          </Card>
        </Col>
      })}
    </Row>
	{id && selectedProject && <Modal size="lg" show={true} onHide={closeProject}>
		<Modal.Header closeButton>
			<Modal.Title>{selectedProject.title}</Modal.Title>
		</Modal.Header>
		 <Modal.Body>
		 {(() => {
              switch (selectedProject.pics.length) {
                case 0:
                  return ''
                case 1:
                  return <div style={{ backgroundImage: `url('${selectedProject.pics[0]}')` }} className="carousel-item-image"></div>
                default:
                  return <Carousel>
                  {selectedProject.pics.map((pic, j) => {
                    return <Carousel.Item key={j}>
                      <div style={{ backgroundImage: `url('${pic}')` }} className="carousel-item-image carousel-item-image-big"></div>
                      </Carousel.Item>
                  })
                }
                </Carousel>
              }
            })()
            }
			{selectedProject.technologies.map((technology, j) => {
              return <span key={j}><Badge bg="primary">{technology}</Badge> </span>
            })}
              <p>
                {selectedProject.description}
              </p>
		 </Modal.Body>
		  <Modal.Footer>
			{typeof selectedProject.site === 'boolean' ? '' : <SiteLink site={selectedProject.site}></SiteLink>}
		  </Modal.Footer>
	</Modal>}
    <style>{`
      .carousel-item-image {
        width: 100%;
        height: 200px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        background-color: rgba(13, 110, 253, 0.25);
      }
	  .carousel-item-image.carousel-item-image-big {
		  height:350px;
	  }
    `}</style>
  </>
}

export default Portfolio
