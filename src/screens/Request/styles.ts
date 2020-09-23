import styled from 'styled-components/native';
import { Colors, FontFamily, FontSize } from '../../constraints';

export const Container = styled.View`
  flex: 1;
  padding: 16px 32px 0px;
  background: ${Colors.background};
`;

export const Header = styled.View`
  padding: 8px 0px;
`;

export const Title = styled.Text`
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.primary};
`;
