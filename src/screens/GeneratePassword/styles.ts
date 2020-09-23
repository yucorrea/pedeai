import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { Colors, FontFamily } from '../../constraints';

export const Container = styled.View`
  flex: 1;
  padding: 16px 32px;
  background: ${Colors.background};

  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${Colors.gray};
  font-family: ${FontFamily.normal};
`;

export const Password = styled.Text`
  font-size: 28px;
  color: ${Colors.primary};
  font-family: ${FontFamily.normal};
  margin: 32px 0px;
`;

export const DateContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const CreateContainer = styled.View``;

export const DateTitle = styled.Text`
  font-size: 18px;
  color: ${Colors.primary};
  font-family: ${FontFamily.normal};
`;

export const Date = styled.Text`
  font-size: 16px;
  color: ${Colors.gray};
  font-family: ${FontFamily.normal};
  padding-top: 14px;
`;

export const ExpireContainer = styled.View``;

export const ExpireTitle = styled.Text`
  font-size: 18px;
  color: ${Colors.primary};
  font-family: ${FontFamily.normal};
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 44px;

  background: ${Colors.success};
  border-radius: 4px;

  justify-content: center;
  align-items: center;

  margin: 32px 0px;
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
  font-family: ${FontFamily.medium};
`;
