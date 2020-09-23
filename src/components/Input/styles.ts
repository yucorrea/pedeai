import styled from 'styled-components/native';
import { Colors, FontSize, FontFamily } from '../../constraints';

export const Container = styled.View`
  width: 100%;
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: 44px;
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  border-color: ${Colors.gray};
  padding: 0px 4px;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${FontFamily.medium};
  font-size: ${FontSize.regular}px;
  color: ${Colors.dark};
  padding: 8px 0px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 44px;
  font-size: ${FontSize.regular}px;
  color: ${Colors.gray};
  padding: 0px 8px;
  font-family: ${FontFamily.normal};
`;
