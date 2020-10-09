import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Inputs from '../components/Inputs'
import Preview from '../components/Preview'

import { Container, Wrapper, Header, StyledLink, LogoTitle, Links } from '../styles/pages'
import SEO from '../components/SEO'

const IndexPage: React.FC = () => {
  let hostName = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://gerador-de-arte.vercel.app'
  const [url, setUrl] = useState(`${hostName}/api/freeze.png?lang=pt`)

  return (
    <Container>
      <Head>
        <SEO />
      </Head>
      <Header>
        <LogoTitle>Gerador de Artes</LogoTitle>
        <Links>
          <StyledLink style={{ cursor: 'default' }}>Home</StyledLink>
          <Link href="/about">
            <StyledLink>About</StyledLink>
          </Link>
        </Links>
      </Header>
      <Wrapper>
        <Preview url={url} />
        <Inputs onSubmit={(data) => {
          if (data) {
            data.date = [data.date.split('-')[2], data.date.split('-')[1]].join('/')
            data.time = [data.time.split(':')[0], data.time.split(':')[1]].join('h')

            let url = hostName
            url += '/api/thumbnail.png?json='
            url += JSON.stringify(data)
            setUrl(url)
            console.log(data)
          }
        }} />
      </Wrapper>
    </Container>
  )
}

export default IndexPage
