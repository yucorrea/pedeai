import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Colors, FontFamily, FontSize } from '../../../../constraints';

export const Container = styled.View`
  flex: 2;
  padding: 16px 32px 0px 32px;
  background: ${Colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.primary};
  margin-left: 16px;
`;

export const BackButton = styled.TouchableWithoutFeedback``;

export const List = styled.View`
  height: 100%;
  background: ${Colors.dark_light};
  border-radius: 4px;
  padding: 8px;
`;

export const ListHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListTitle = styled.Text`
  font-size: ${FontSize.medium}px;
  color: ${Colors.gray};
  font-family: ${FontFamily.medium};
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  flex: 1;
  font-size: ${FontSize.medium}px;
  color: ${Colors.dark};
  font-family: ${FontFamily.normal};
  margin: 8px 0px;
  text-align: left;
`;

export const Amount = styled.Text`
  flex: 1;
  font-size: ${FontSize.regular}px;
  color: ${Colors.dark};
  font-family: ${FontFamily.normal};
  margin: 8px 0px;
  text-align: center;
`;

export const Price = styled.Text`
  flex: 1;
  font-size: ${FontSize.regular}px;
  color: ${Colors.dark};
  font-family: ${FontFamily.normal};
  margin: 8px 0px;
  text-align: center;
`;

export const Subtotal = styled.Text`
  flex: 1;
  font-size: ${FontSize.regular}px;
  color: ${Colors.dark};
  font-family: ${FontFamily.normal};
  margin: 8px 0px;
  text-align: center;
`;

export const Footer = styled.View`
  padding: 8px 32px 16px 32px;
  background: ${Colors.background};
`;

export const Total = styled.Text`
  font-size: ${FontSize.regular}px;
  color: ${Colors.primary};
  font-family: ${FontFamily.medium};
  margin-right: 16px;
`;

export const TotalPrice = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.dark};
`;
export const Information = styled.View``;

export const InformationTitle = styled.Text`
  font-size: ${FontSize.medium}px;
  font-family: ${FontFamily.normal};
  color: ${Colors.gray};
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 44px;
  background: ${Colors.primary};
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  margin: 32px 0px 16px;
`;

export const ButtonTitle = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.white};
`;
