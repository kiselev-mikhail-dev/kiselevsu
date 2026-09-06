import React from 'react'
import { Container, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'
import Topnav from './topnav'
import bg from '../assets/img/banner.jpg'
function Header() {
  return <header>
	<Container className="header-banner">
		<Topnav />
		<Button variant="secondary" className="resume-pdf-button">
			<Icon.FiletypePdf />
		</Button>
		<style>{`
		.header-banner{
			background-image: url('${bg.src}');
			background-size:auto 210%;
			background-color:#ffffff;
			background-position: center right;
			background-repeat: no-repeat;
			height: 200px;
			margin-bottom:16px;
			position:relative;
		}
		button.btn.resume-pdf-button {
			position:absolute;
			top:100px;
			right:16px;
		}
		`}</style>
	</Container>
  </header>
}

export default Header