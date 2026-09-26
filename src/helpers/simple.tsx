import * as Icon from 'react-bootstrap-icons'
import SiteLink from '../components/siteLink'
import React from 'react'
import { Site } from '../types/simple'
export function GetSiteLink (site: Site | false) {
  if (!site) {
    return ''
  }
  return <p><Icon.Link45deg /> <SiteLink site={site}></SiteLink></p>
}