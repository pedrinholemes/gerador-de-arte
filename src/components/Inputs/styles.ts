import styled from 'styled-components'
import { Input as Field, Form } from 'unform'

export const Container = styled(Form)`
  display:flex;
  flex-direction: column;
  margin-left: 8px;
  height: 520px;
  @media(max-width: 900px){
    margin-left: 0;
    margin-top: 8px; 
width: 75vw;
  }
`

export const InputBlock = styled.div`
  & + div{
    margin-top: 8px;
  }
`

export const Label = styled.label`
margin-right: 8px;

`

export const Input = styled(Field)`

`

export const Footer = styled.div``

export const Submit = styled.button.attrs({
  type: 'submit'
})`
  padding: 16px;
  width: 100%;
  margin-top: 8px;
`

export const InputsContainer = styled.fieldset`
  padding: 32px 16px;
`

export const InputsTitle = styled.legend``

