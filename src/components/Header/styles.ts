import styled from 'styled-components/native';

import { Colors, FontFamily, FontSize } from '../../constraints';

export const Container = styled.View`
  padding: 16px 32px 16px 32px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${Colors.background};
`;

export const Profile = styled.View``;

export const Welcome = styled.Text`
  color: ${Colors.primary};
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.medium};
`;

export const Name = styled.Text`
  color: ${Colors.gray};
  font-size: ${FontSize.regular}px;
  font-family: ${FontFamily.normal};
`;

export const Logout = styled.TouchableWithoutFeedback``;
