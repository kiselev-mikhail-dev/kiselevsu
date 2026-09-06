import React from 'react'
import { Site } from '../types/simple'

type SiteLinkProps = {
  site: Site
}

export default function SiteLink (props: SiteLinkProps) {
  const site = props.site
  return site.exists ? <a target="_blank" rel="noreferrer" href={site.url} >{new URL(site.url).host}</a> : <span title="Сайт недоступен" className="text-muted">{new URL(site.url).host}</span>
}
