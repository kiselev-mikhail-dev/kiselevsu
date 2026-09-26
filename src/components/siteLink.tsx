import React from 'react'
import { Site } from '../types/simple'

export type SiteLinkProps = {
  site: Site|false
}

export default function SiteLink (props: SiteLinkProps) {
  const site = props.site
  if(!site) return;
  return site.exists ? <a target="_blank" rel="noreferrer" href={site.url} >{new URL(site.url).host}</a> : <span title="Сайт недоступен" className="text-muted">{new URL(site.url).host}</span>
}
