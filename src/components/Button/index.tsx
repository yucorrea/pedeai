import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, Text } from './styles';

interface ButtonProps extends RectButtonProperties {
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ children, color, ...rest }) => (
  <Container {...rest} color={color}>
    <Text>{children}</Text>
  </Container>
);

export default Button;
