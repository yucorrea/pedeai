import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { StackHeaderProps } from '@react-navigation/stack';
import { useAuth } from '../../hooks/auth';
import { Colors } from '../../constraints';
import { Container, Profile, Welcome, Name, Logout } from './styles';

const Header: React.FC<StackHeaderProps> = props => {
  const { signOut } = useAuth();
  return (
    <Container {...props}>
      <Profile>
        <Welcome>Bem-Vindo</Welcome>
        <Name>Yuri Corrêa</Name>
      </Profile>
      <Logout onPress={signOut}>
        <Icon name="log-in" size={24} color={Colors.primary} />
      </Logout>
    </Container>
  );
};

export default Header;
