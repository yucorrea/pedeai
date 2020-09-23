import React from 'react';

import { KeyboardAvoidingView } from 'react-native';
import { Colors } from '../../constraints';
import Button from '../../components/Button';

import Input from '../../components/Input';

import {
 Container, Content, Wrapper, Image
} from './styles';

const AddProduct: React.FC = () => (
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
          <Button color={Colors.success}>ADICIONAR PRODUTO</Button>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  </>
);
export default AddProduct;
