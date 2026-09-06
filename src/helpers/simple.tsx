import * as Icon from 'react-bootstrap-icons'
import SiteLink from '../components/siteLink'
import React from 'react'
export function GetSiteLink (site: Partial<boolean & Site>) {
  if (typeof site === 'boolean') {
    return ''
  }
  return <p><Icon.Link45deg /> <SiteLink site={site as Site}></SiteLink></p>
}