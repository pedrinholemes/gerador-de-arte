import styled from 'styled-components';

export const Main = styled.main`
  color: ${p => p.theme.colors.text};
  background: rgba(255,255,255,0.05);
  padding: 32px; 
  width: 75vw;
  border-radius: 8px;
  text-align: left;
  h1{
    font-size: 2em;
    margin: .67em 0;
  }
  h2{
    font-size: 1.5em;
    margin: .75em 0;
  }
  h3{
    font-size: 1.17em;
    margin: .83em 0;
  }
  h4, p,
  blockquote, ul,
  fieldset, form,
  ol, dl, dir,
  menu{
    margin: 1.12em 0;
  }
  h5{
    font-size: .83em;
    margin: 1.5em 0;
  }
  h6{
    font-size: .75em;
    margin: 1.67em 0;
  }
  @media(max-width: 700px){
    padding: 24px;
    width: 90vw;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`

export { Header, StyledLink, Container, LogoTitle, Links } from '.'
