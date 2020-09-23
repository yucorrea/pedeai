import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
 Container, Content, Back, Wrapper, Image
} from './styles';

const EditProduct: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <>
      <Container>
        <Wrapper>
          <Image
            source={{
              uri:
                'https://barbecuebible.com/wp-content/uploads/2013/05/featured-great-american-hamburger-1024x640.jpg',
            }}
            resizeMode="cover"
          />
          <Back onPress={() => goBack()}>
            <Icon name="chevron-left" size={24} color="#fff" />
          </Back>
        </Wrapper>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Content>
            <Input
              labelText="Produto"
              name="product"
              icon="file-text"
              placeholder="Ex: Hamburguer"
            />
            <Input
              labelText="Preço"
              name="name"
              icon="dollar-sign"
              placeholder="R$ 0,00"
            />
            <Input
              labelText="Categoria"
              name="category"
              icon="book"
              placeholder="Ex: Bebida"
            />
            <Input
              labelText="Ingredientes"
              name="ingredients"
              icon="list"
              placeholder="Ex: Pão, alface, tomate"
            />
            <Button>SALVAR ALTERAÇÃO</Button>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
};
export default EditProduct;
