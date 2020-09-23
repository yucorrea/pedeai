import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Colors, FontFamily, FontSize } from '../../constraints';

export const Container = styled.View`
  flex: 1;
  padding: 16px 32px 0px 32px;
  background: ${Colors.background};
`;
export const Header = styled.View`
  padding: 8px 0px;
`;

export const Wrapper = styled.View``;

export const Title = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.primary};
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const InfoText = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.dark};
  margin: 8px 0px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
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

export const RemoveText = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.primary};
`;

export const Ingredient = styled.Text`
  margin: 4px 0px;
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.gray};
  line-height: 22px;
`;

export const Total = styled.View`
  background: ${Colors.dark_light};
  padding: 8px 16px;
  border-radius: 4px;
  margin: 8px;
`;

export const Quantity = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.dark};
`;

export const Menu = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const Subtotal = styled.Text`
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

export const TotalTitle = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.dark};
  text-align: right;
`;

export const PriceTotal = styled.Text`
  font-size: ${FontSize.big}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.dark};
  text-align: right;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 44px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  border-radius: 4px;
  background: ${Colors.success};
`;

export const ButtonTitle = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.white};
  text-align: right;
`;
