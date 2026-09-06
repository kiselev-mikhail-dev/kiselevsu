import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import Head from 'next/head'
import github from '../assets/img/github.png'
import tenchat from '../assets/img/tenchat.png'
import hh from '../assets/img/hh.png'
import vk from '../assets/img/vk.svg'
import ok from '../assets/img/ok.svg'

function Contact () {
  return <div>
    <Head>
      <title key="title">Контактная информация</title>
      <meta
            key="description"
            name="description"
            content="Как связаться с Михаилом Киселевым?"
        />
        <meta
            key="og:type"
            name="og:type"
            content="profile"
        />
        <meta
            key="og:title"
            name="og:title"
            content="Контактная информация"
        />
        <meta
            key="og:description"
            name="og:description"
            content="Как связаться с Михаилом Киселевым?"
        />
        <meta
            key="og:url"
            name="og:url"
            content="https://kiselev.su/contact"
        />
        <meta
            key="og:image"
            name="og:image"
            content=""
        />
    </Head>
    <a className="contact-link contact-link-hh" title="HeadHunter" href="https://ulyanovsk.hh.ru/resume/f3a055e4ff064e22de0039ed1f773952703973">HH</a>

    <p><Icon.Envelope /> <a href="mailto:mikhail@kiselev.su">mikhail@kiselev.su</a></p>
	<p title="Прямой ссылки на ТГ не будет на всякий случай"><Icon.Telegram /> MikhailAKiselev</p>
    <style jsx>{`
      .contact-link {
        font-size: 0px;
        width: 96px;
        height: 64px;
        margin: 16px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
        opacity: 0.6;
        transition: 0.5s;
        transition-property: opacity;
        &:hover {
          opacity: 1;
        }
        &.contact-link {
          &-github{
            background-image: url(${github.src})
          }
          &-tenchat {
            background-image: url(${tenchat.src})
          }
          &-hh {
            background-image: url(${hh.src});
          }
          &-vk {
            background-image: url(${vk.src})
          }
          &-ok {
            background-image: url(${ok.src})
          }
        }
      }
    `}</style>
  </div>
}

export default Contact
