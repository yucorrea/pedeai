import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  Container,
  Wrapper,
  Edit,
  Back,
  Image,
  EditText,
  Content,
  ContentHeader,
  ContentTitle,
  ContentPrice,
  IngredientContainer,
  IngredientTitle,
  Ingredient,
  Remove,
  RemoveTitle,
} from './styles';

const DetailProduct: React.FC = () => {
  const { params } = useRoute();

  const { goBack, navigate } = useNavigation();
  return (
    <>
      <Container>
        <Wrapper>
          <Image source={{ uri: params.product.image }} resizeMode="cover" />
          <Back onPress={() => goBack()}>
            <Icon name="chevron-left" size={24} color="#fff" />
          </Back>
          <Edit onPress={() => navigate('EditProduct')}>
            <EditText>Editar</EditText>
          </Edit>
        </Wrapper>

        <Content>
          <ContentHeader>
            <ContentTitle>{params.product.title}</ContentTitle>
            <ContentPrice>
              R$
              {params.product.price}
            </ContentPrice>
          </ContentHeader>

          <IngredientContainer>
            <IngredientTitle>Ingredientes</IngredientTitle>
            <Ingredient>{params.product.ingredients.join(', ')}</Ingredient>
          </IngredientContainer>
        </Content>

        <Remove>
          <RemoveTitle>REMOVER</RemoveTitle>
        </Remove>
      </Container>
    </>
  );
};
export default DetailProduct;
