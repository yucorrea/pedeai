import React, { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  Title,
  Bold,
  Content,
  Progress,
  Wrapper,
  RequestText,
  ProductionText,
  FinishText,
  Request,
  Production,
  Finish,
  LineOpacity,
  Footer,
  Data,
  DateTitle,
  DateTime,
  Client,
  ClientTitle,
  Name,
  Detail,
  DetailTitle,
} from './styles';

const CardRequest: React.FC = () => {
  const [status, setStatus] = useState(0);

  const navigation = useNavigation();

  const navigateDetail = useCallback(() => {
    navigation.navigate('Detail');
  }, [navigation]);

  return (
    <Container>
      <Header>
        <Title>Pedido</Title>
        <Bold>#222</Bold>
      </Header>

      <Content>
        <Wrapper>
          <Request progress={status} onPress={() => setStatus(0)} />
          <RequestText progress={status}>Pedido realizado</RequestText>
        </Wrapper>
        <Wrapper>
          <Production progress={status} onPress={() => setStatus(1)} />
          <ProductionText progress={status}>Em preparação</ProductionText>
        </Wrapper>
        <Wrapper>
          <Finish progress={status} onPress={() => setStatus(2)} />
          <FinishText progress={status}>Concluído</FinishText>
        </Wrapper>
        <LineOpacity />
        <Progress progress={status} />
      </Content>
      <Footer>
        <Data>
          <DateTitle>Data</DateTitle>
          <DateTime>01/02/2020</DateTime>
        </Data>
        <Client>
          <ClientTitle>Cliente</ClientTitle>
          <Name>Yuri Corrêa</Name>
        </Client>
        <Detail onPress={navigateDetail}>
          <DetailTitle>Ver detalhes</DetailTitle>
        </Detail>
      </Footer>
    </Container>
  );
};

export default CardRequest;
