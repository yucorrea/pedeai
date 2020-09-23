import React, { useCallback } from 'react';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';

import {
  Container,
  Alert,
  Button,
  Header,
  Client,
  ClientText,
  Employee,
  EmployeeText,
} from './styles';

const SignInClient: React.FC = () => {
  const { navigate } = useNavigation();
  const navigateToEmployee = useCallback(() => {
    navigate('SignInEmployee');
  }, [navigate]);
  const { signIn } = useAuth();

  return (
    <Container>
      <Header>
        <Client>
          <ClientText>Cliente</ClientText>
        </Client>
        <Employee onPress={navigateToEmployee}>
          <EmployeeText>Funcionário</EmployeeText>
        </Employee>
      </Header>
      <Input
        labelText="Nome"
        name="name"
        icon="user"
        placeholder="Digite seu nome"
      />
      <Input
        labelText="Senha"
        name="password"
        icon="lock"
        placeholder="Digite sua senha"
      />
      <Button onPress={() => signIn({ name: 'John Doe', employe: false })}>
        ENTRAR
      </Button>
    </Container>
  );
};

export default SignInClient;
