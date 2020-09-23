import React from 'react';

import {
  Container,
  Wrapper,
  Title,
  Password,
  DateContainer,
  CreateContainer,
  DateTitle,
  Date,
  ExpireContainer,
  ExpireTitle,
  Button,
  ButtonTitle,
} from './styles';

const GeneratePassword: React.FC = () => (
  <Container>
    <Wrapper>
      <Title>SENHA GERADA</Title>
      <Password>1234</Password>
    </Wrapper>

    <DateContainer>
      <CreateContainer>
        <DateTitle>Criado em:</DateTitle>
        <Date>20/09/2020 às 19:00h</Date>
      </CreateContainer>

      <ExpireContainer>
        <ExpireTitle>Expira em:</ExpireTitle>
        <Date>20/09/2020 às 23:00h</Date>
      </ExpireContainer>
    </DateContainer>

    <Button>
      <ButtonTitle>GERAR SENHA</ButtonTitle>
    </Button>
  </Container>
);

export default GeneratePassword;
