import NextLink  from 'next/link'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useRouter } from 'next/router'
import * as texts from '../texts/navigation'
import logo from '../assets/img/logo.png'

type TopNavItem = {
  link: any,
  text: string,
  description: string,
};


function GetMenuItem(item: TopNavItem, key:any, route:any) {
  return  <div className="nav-item" key={key}>
    <NextLink  href={item.link} data-route="links">
      <a className={route == item.link ? "nav-link disabled" : "nav-link" } title={item.description}>{item.text}</a>
    </NextLink >
  </div>
}

function Topnav() {
  const links = [
	{"link":"/education", "text":texts.EDUCATION, "description":texts.DESCRIPTION_EDUCATION},
	{"link":"/experience", "text":texts.EXPERIENCE, "description":texts.DESCRIPTION_EXPERIENCE},
    {"link": "/portfolio", "text": texts.PORTFOLIO, "description": texts.DESCRIPTION_PORTFOLIO},
    {"link": "/contact", "text": texts.CONTACT,  "description": texts.DESCRIPTION_CONTACT},
  ];
  const route = useRouter().route;


  return <Navbar expand="md" sticky="top">
      <Container>
        <NextLink href="/">
			<Navbar.Brand  className={route == "/" ? "nav-link disabled" : "nav-link" } href="./" data-route="home" title={texts.MIKHAIL_KISELEVS_PERSONAL_SITE}>
			<img src={logo.src} alt={texts.MIKHAIL_KISELEVS_PERSONAL_SITE} width="48" height="48" />
			</Navbar.Brand>
		</NextLink>
        <Navbar.Toggle type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarDefault">
          <Nav className="navbar-nav mr-auto">
           {links.map((item:TopNavItem, key)=>{return GetMenuItem(item, key, route);})}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
}

export default Topnav;