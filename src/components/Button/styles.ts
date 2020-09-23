import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Colors, FontFamily, FontSize } from '../../constraints';

interface ContainerProps {
  color?: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  height: 44px;
  background: ${({ color }) => color || Colors.primary};

  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 16px 0px;
`;

export const Text = styled.Text`
  color: ${Colors.white};
  font-family: ${FontFamily.medium};
  font-size: ${FontSize.regular}px;
`;
