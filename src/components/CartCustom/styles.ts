import styled from 'styled-components/native';
import { Colors, FontSize, FontFamily } from '../../constraints';

export const Container = styled.View`
  position: relative;
`;

export const CountContainer = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  position: absolute;
  right: -6px;
  top: -4px;

  justify-content: center;
  align-items: center;
  background: ${Colors.primary};
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
`;

export const CountText = styled.Text`
  font-size: 8px;
  color: ${Colors.white};
`;
