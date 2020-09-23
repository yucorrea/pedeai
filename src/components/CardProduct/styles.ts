import styled from 'styled-components/native';

import { Colors, FontSize, FontFamily } from '../../constraints';

export const Container = styled.View`
  width: 100%;
  margin: 8px 0px;
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;

export const Detail = styled.View`
  flex: 1;
  padding: 8px;
`;

export const Title = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.primary};
`;

export const Ingredient = styled.Text`
  margin: 2px 0px;
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.gray};
  line-height: 22px;
`;

export const Total = styled.View`
  background: ${Colors.dark_light};
  padding: 8px 16px;
  border-radius: 4px;
  margin: 8px 0px;
`;

export const Quantity = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.dark};
`;

export const Menu = styled.View`
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const FooterTitle = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.dark};
  text-align: right;
`;

export const Price = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.dark};
  text-align: right;
`;
