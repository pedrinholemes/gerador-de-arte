import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import matter from 'gray-matter'

import Markdown from '../components/Markdown'
import MarkdownText from '../_pages/about.md'
import { Container, Wrapper, Header, StyledLink, Main, LogoTitle, Links } from '../styles/pages/about';
import SEO from '../components/SEO'

const About: React.FC = () => {
  const frontMatter = matter(MarkdownText)
  return (
    <Container>
      <Header>
        <LogoTitle>Gerador de Artes</LogoTitle>
        <Links>
          <Link href="/">
            <StyledLink>Home</StyledLink>
          </Link>
          <StyledLink style={{ cursor: 'default' }}>Sobre</StyledLink>
        </Links>
      </Header>
      <Head>
        <SEO title={frontMatter.data.title} description={frontMatter.data.description} image={frontMatter.data.socialImage} />
      </Head>
      <Wrapper>
        <Main>
          <Markdown source={frontMatter.content} />
        </Main>
      </Wrapper>
    </Container>
  );
}

export default About
