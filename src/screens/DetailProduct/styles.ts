import styled from 'styled-components/native';

import { Colors, FontFamily, FontSize } from '../../constraints';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.background};
`;

export const Wrapper = styled.View`
  width: 100%;
  position: relative;
  flex-direction: row;
`;

export const Back = styled.TouchableOpacity`
  position: absolute;
  left: 32px;
  top: 32px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 280px;
  border-bottom-right-radius: 48px;
  border-bottom-left-radius: 48px;
`;

export const Edit = styled.TouchableOpacity`
  position: absolute;

  top: 32px;
  right: 16px;
`;

export const EditText = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.white};
`;

export const Content = styled.View`
  padding: 16px 32px;
  flex: 3;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentTitle = styled.Text`
  font-size: 24px;
  font-family: ${FontFamily.medium};
  color: ${Colors.primary};
`;

export const ContentPrice = styled.Text`
  font-size: 24px;
  font-family: ${FontFamily.medium};
  color: ${Colors.dark};
`;

export const IngredientContainer = styled.View`
  margin: 16px 0px;
`;

export const IngredientTitle = styled.Text`
  font-size: 24px;
  font-family: ${FontFamily.medium};
  color: ${Colors.dark};
`;

export const Ingredient = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.gray};
`;

export const Remove = styled.TouchableOpacity`
  flex: 1;
`;

export const RemoveTitle = styled.Text`
  text-align: center;
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.primary};
`;
