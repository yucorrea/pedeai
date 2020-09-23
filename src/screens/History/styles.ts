import styled from 'styled-components/native';

import { Colors, FontFamily } from '../../constraints';

export const Container = styled.View`
  flex: 1;
  padding: 16px 32px;
  background: ${Colors.background};
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const Back = styled.TouchableNativeFeedback``;

export const Date = styled.Text`
  font-size: 18px;
  color: ${Colors.primary};
  font-family: ${FontFamily.medium};
  margin: 0px 16px;
`;

export const Next = styled.TouchableNativeFeedback``;
