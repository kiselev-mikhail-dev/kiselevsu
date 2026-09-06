import React from 'react'
import { projectsItem } from '../types/simple'

type SiteLinkProps = {
  project: projectsItem
}

export default function SiteLink (props: SiteLinkProps) {
  const item = props.project;
  return <Card>
            {(() => {
              switch (item.pics.length) {
                case 0:
                  return ''
                case 1:
                  return <div style={{ backgroundImage: `url('${item.pics[0]}')` }} className="carousel-item-image"></div>
                default:
                  return <Carousel>
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
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {typeof item.site === 'boolean' ? '' : <SiteLink site={item.site}></SiteLink>}
            </Card.Footer>
          </Card>
}