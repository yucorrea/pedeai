import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { TextInputProps } from 'react-native';
import { Colors } from '../../constraints';
import { Container, ContainerInput, TextInput, Label } from './styles';

interface InputProps extends TextInputProps {
  labelText: string;
  name: string;
  icon: string;
}
const Input: React.FC<InputProps> = ({
 labelText, name, icon, ...rest
}) => (
  <Container>
    <Label>{labelText}</Label>
    <ContainerInput>
      <Icon name={icon} size={24} color={Colors.gray} />
      <TextInput {...rest} placeholderTextColor={Colors.gray} />
    </ContainerInput>
  </Container>
);

export default Input;
