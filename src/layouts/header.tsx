import React from 'react'
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'
import Topnav from './topnav'
import bg from '../assets/img/banner.jpg'
import resume from '../assets/files/MikhailKiselev.pdf'

function Header() {
  return <header>
	<Container className="header-banner">
		<Topnav />
		<a
			className="resume-pdf-button"
			href={resume}
			download="MikhailKiselev.pdf"
			title="Скачать резюме (PDF)"
		>
			<Icon.FiletypePdf />
		</a>
		{/* Нужен именно style jsx global:
		    - обычный <style> нельзя: React экранирует кавычки в CSS в &#x27;, а внутри
		      <style> (raw text элемент) HTML-сущности не декодируются, поэтому
		      падала гидратация ("Text content does not match server-rendered HTML")
		      и ломался url() в CSS;
		    - обычный <style jsx> тоже не подойдёт: класс-скоуп styled-jsx вешается
		      только на host-элементы, а .header-banner висит на Container
		      из react-bootstrap. */}
		<style jsx global>{`
		body{
			background:#efeee9
		}
		.header-banner{
			background-image: url('${bg.src}');
			background-size:auto 210%;
			background-position: center right;
			background-repeat: no-repeat;
			height: 200px;
			margin-bottom:16px;
			position:relative;
		}
		.resume-pdf-button {
			font-size:46px;
			position:absolute;
			top:80px;
			right:0px;
		}
		`}</style>
	</Container>
  </header>
}

export default Header