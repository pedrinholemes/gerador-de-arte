import React from 'react'
import Head from 'next/head'

import siteConfig from '../../site.config'

interface Props {
  title?: string
  image?: string
  url?: string
  description?: string
}
const SEO: React.FC<Props> = ({ title, description, image, url }) => {
  return (
    <Head>
      <title>{title || siteConfig.title}</title>
      <meta name="description" content={description || siteConfig.description} />
      <meta name="author" content={siteConfig.author} />
      <meta property="og:title" content={title || siteConfig.title} />
      <meta property="og:image" content={image || siteConfig.image} />
      <meta property="og:description" content={description || siteConfig.description} />
      <meta property="og:author" content={siteConfig.author} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:locale" content={siteConfig.language} />
      <meta property="og:site_name" content={siteConfig.title} />
      <meta property="og:type" content="website" />
    </Head>
  );
}

export default SEO;
