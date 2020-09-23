import React from 'react';

import { Container, Header, Title } from './styles';

import CardRequest from '../../components/CardRequest';

const Request: React.FC = () => (
  <Container>
    <Header>
      <Title>Histórico de Pedidos</Title>
    </Header>
    <CardRequest />
  </Container>
);

export default Request;
