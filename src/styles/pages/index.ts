import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  min-height: 85vh;
  @media(max-width: 900px){
    flex-direction: column;
    margin-bottom: 16px;
  }
`
export const Header = styled.header`
  height: 70px;
  width: 75vw;
  margin: 0 auto;
  font-family: Poppins, Roboto, sans-serif;
  padding: 16px;
  display:flex;
  align-items:center;
  justify-content: space-between;
  @media(max-width:700px){
    width: 80vw;
    padding: 8px;
  }
`

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  transition: opacity 0.5s;
  font-weight: 500;
  font-size: 18px;
  &:hover{
    opacity: 0.8;
  }
  &:first-child{
    margin-left: 16px;
  }
`
export const LogoTitle = styled.h2`
  font-weight: 600;
  @media(max-width:700px){
    font-size: 16px;
  }
`

export const Links = styled.div`
  padding: 8px;
  display:flex;
  align-items:center;
  justify-content: space-around;
  width: 30%;
  @media(max-width:700px){
    width: 55%;
    font-size: 16px;
  }
`

