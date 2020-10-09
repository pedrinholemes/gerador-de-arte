import React, { useState } from 'react'
import { Scope } from 'unform'

import {
  Container,
  InputBlock,
  Label,
  Input,
  Footer,
  Submit,
  InputsContainer,
  InputsTitle
} from './styles';

interface RootObject {
  church: Church;
  date: string;
  images: Images;
  preacher: string;
  time: string;
  title: string;
}

interface Images {
  first: string;
  second: string;
}

interface Church {
  name: string;
  address: string;
}

interface Props {
  onSubmit?: (data: RootObject) => void;
}

const Inputs: React.FC<Props> = ({ ...rest }) => {
  const imageFirst = useState('')
  const imageSecond = useState('')
  return (
    <Container {...rest}>

      <InputsContainer>
        <InputsTitle>Informações do Culto</InputsTitle>

        <InputBlock>
          <Label htmlFor="title">Nome:</Label>
          <Input required id="title" name="title" placeholder="Culto ..." />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="preacher">Preletor(Pregador):</Label>
          <Input required id="preacher" name="preacher" placeholder="..." />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="date">Dia:</Label>
          <Input required id="date" name="date" type="date" />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="time">Horário:</Label>
          <Input required id="time" name="time" type="time" />
        </InputBlock>
      </InputsContainer>

      <InputsContainer>
        <InputsTitle>Informações da Igreja</InputsTitle>
        <Scope path="church">
          <InputBlock>
            <Label htmlFor="name">Nome:</Label>
            <Input required id="name" name="name" placeholder="Igreja ..." />
          </InputBlock>
          <InputBlock>
            <Label htmlFor="address">Endereço:</Label>
            <Input required id="address" name="address" placeholder="Rua ..." />
          </InputBlock>
        </Scope>
      </InputsContainer>

      <InputsContainer>
        <InputsTitle>Imagens</InputsTitle>
        <Scope path="images">

          <InputBlock>
            <Label htmlFor="first">Primeira Logo:</Label>
            <Input required id="first" name="first" type="url" placeholder="https:// ou http:// " />
          </InputBlock>
          <InputBlock>
            <Label htmlFor="second">Segunda Logo:</Label>
            <Input required id="second" name="second" type="url" placeholder="https:// ou http:// " />
          </InputBlock>

        </Scope>
      </InputsContainer>
      <Footer>
        <Submit>Gerar</Submit>
      </Footer>
    </Container>
  );
};

export default Inputs;
