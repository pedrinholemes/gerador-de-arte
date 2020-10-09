import styled from 'styled-components'
import ReactLoading from 'react-loading'

export const Container = styled.div`
 position: relative;
 margin:0;
`

export const Canvas = styled.img`
  width: 500px;
  height: 500px;
  @media(max-width: 900px){
    height: auto;
    width: 75vw;
    max-height: 75vh;
  }
`
export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%) translateY(-50%);
  z-index: -1;
`

export const LoadingElement = styled(ReactLoading)`

`
