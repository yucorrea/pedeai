import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../../constraints';
import {
  Container,
  Header,
  BackButton,
  Title,
  List,
  ListHeader,
  ListTitle,
  Product,
  Name,
  Amount,
  Price,
  Subtotal,
  Footer,
  Total,
  TotalPrice,
  Information,
  InformationTitle,
  Button,
  ButtonTitle,
} from './styles';

interface Product {
  id: string;
  name: string;
  quantidade: number;
  price: number;
}

const Detail: React.FC = () => {
  const navigation = useNavigation();

  const products: Product[] = [
    {
      id: '1',
      name: 'Hamburguer',
      quantidade: 1,
      price: 7.0,
    },
    {
      id: '2',
      name: 'Batata Frita',
      quantidade: 2,
      price: 14.0,
    },
  ];
  return (
    <>
      <Container>
        <Header>
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={24} color={Colors.primary} />
          </BackButton>
          <Title>Detalhes do pedido #002</Title>
        </Header>
        <List>
          <ListHeader>
            <ListTitle>Produtos</ListTitle>
            <ListTitle>Qtd</ListTitle>
            <ListTitle>Preço</ListTitle>
            <ListTitle>Subtotal</ListTitle>
          </ListHeader>
          <FlatList
            data={products}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Product key={item.id}>
                <Name numberOfLines={1}>{item.name}</Name>
                <Amount>{item.quantidade}</Amount>
                <Price>
                  R$
                  {item.price}
                </Price>
                <Subtotal>
                  R$
                  {item.price * item.quantidade}
                </Subtotal>
              </Product>
            )}
          />
        </List>
      </Container>
      <Footer>
        <Header>
          <Total>TOTAL</Total>
          <TotalPrice>R$ 35,00</TotalPrice>
        </Header>
        <Information>
          <InformationTitle>
            * Só é possível o cancelamento de pedidos que ainda não estão em
            preparação.
          </InformationTitle>
        </Information>

        <Button>
          <ButtonTitle>CANCELAR PEDIDO</ButtonTitle>
        </Button>
      </Footer>
    </>
  );
};

export default Detail;
