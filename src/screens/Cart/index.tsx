import React from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import { Colors } from '../../constraints';

import {
  Container,
  Header,
  Title,
  InfoContainer,
  InfoText,
  Content,
  Image,
  Detail,
  RemoveText,
  Ingredient,
  Total,
  Quantity,
  Menu,
  Footer,
  Subtotal,
  Price,
  TotalTitle,
  PriceTotal,
  Button,
  ButtonTitle,
} from './styles';

import { useCart } from '../../hooks/cart';

const Cart: React.FC = () => {
  const {
    cart,
    amount,
    addToCart,
    removeToCart,
    remove,
    subTotal,
    total,
  } = useCart();

  const { navigate } = useNavigation();
  return (
    <Container>
      <Header>
        <Title>Lista de Pedidos</Title>
      </Header>

      <FlatList
        data={cart}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={() => (
          <InfoContainer>
            <MaterialIcon
              name="add-shopping-cart"
              size={48}
              color={Colors.dark}
            />
            <InfoText>Seu carrinho está vázio</InfoText>
          </InfoContainer>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <Content>
              <Image
                source={{
                  uri: item.image,
                }}
              />

              <Detail>
                <Title>{item.title}</Title>

                <Ingredient>{item.ingredients.join(', ')}</Ingredient>
              </Detail>

              <TouchableWithoutFeedback onPress={() => remove(item.id)}>
                <RemoveText>Remover</RemoveText>
              </TouchableWithoutFeedback>
            </Content>
            <Footer>
              <Menu>
                <TouchableWithoutFeedback
                  onPress={() => addToCart({ id: item.id, amount: 1 })}
                >
                  <Feather
                    name="plus-circle"
                    size={24}
                    color={Colors.primary}
                  />
                </TouchableWithoutFeedback>
                <Total>
                  <Quantity>{amount[item.id] || 0}</Quantity>
                </Total>
                <TouchableWithoutFeedback
                  onPress={() => removeToCart({ id: item.id, amount: 1 })}
                >
                  <Feather
                    name="minus-circle"
                    size={24}
                    color={Colors.primary}
                  />
                </TouchableWithoutFeedback>
              </Menu>
              <Subtotal>Subtotal</Subtotal>
              <Price>
                R$
                {subTotal[item.id]}
              </Price>
            </Footer>
          </>
        )}
      />

      {cart.length > 0 && (
        <>
          <Footer>
            <TotalTitle>TOTAL</TotalTitle>
            <PriceTotal>
              R$
              {total}
            </PriceTotal>
          </Footer>

          <Button onPress={() => navigate('Success')}>
            <ButtonTitle>CONFIRMAR PEDIDO</ButtonTitle>
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
