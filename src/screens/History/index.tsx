import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { Colors } from '../../constraints';
import {
 Container, Header, Back, Date, Next
} from './styles';

import CardRequest from '../../components/CardRequest';

const History: React.FC = () => (
  <Container>
    <Header>
      <Back>
        <Icon name="chevron-left" size={24} color={Colors.primary} />
      </Back>
      <Date>21 de Setembro</Date>

      <Next>
        <Icon name="chevron-right" size={24} color={Colors.primary} />
      </Next>
    </Header>

    <CardRequest />
  </Container>
);

export default History;
