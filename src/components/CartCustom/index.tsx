import React, { useMemo } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../hooks/cart';
import { Container, CountContainer, CountText } from './styles';

interface CartCustomProps {
  size: number;
  color: string;
}
const CartCustom: React.FC<CartCustomProps> = ({ color, size, ...rest }) => {
  const { cart } = useCart();

  const total = useMemo(() => cart.length, [cart]);
  return (
    <Container {...rest}>
      <Icon name="add-shopping-cart" size={size} color={color} />
      <CountContainer>
        <CountText>{total}</CountText>
      </CountContainer>
    </Container>
  );
};

export default CartCustom;
