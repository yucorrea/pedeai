import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';

import {
  Container,
  Button,
  Header,
  Client,
  ClientText,
  Employee,
  EmployeeText,
} from './styles';

const SignInEmployee: React.FC = () => {
  const { navigate } = useNavigation();
  const navigateToClient = useCallback(() => {
    navigate('SignInClient');
  }, [navigate]);
  const { signIn } = useAuth();
  return (
    <Container>
      <Header>
        <Client onPress={navigateToClient}>
          <ClientText>Cliente</ClientText>
        </Client>
        <Employee>
          <EmployeeText>Funcionário</EmployeeText>
        </Employee>
      </Header>
      <Input
        labelText="Matrícula"
        name="registration"
        icon="clipboard"
        placeholder="Digite sua matrícula"
      />
      <Input
        labelText="Senha"
        name="password"
        icon="lock"
        placeholder="Digite sua senha"
      />
      <Button onPress={() => signIn({ name: 'John Doe', employe: true })}>
        ENTRAR
      </Button>
    </Container>
  );
};

export default SignInEmployee;
