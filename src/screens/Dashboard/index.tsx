import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';

import CardRequest from '../../components/CardRequest';

const Dashboard: React.FC = () => (
  <>
    <Header />
    <Container>
      <CardRequest />
    </Container>
  </>
);

export default Dashboard;
