import styled from 'styled-components/native';

import { Colors } from '../../constraints';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${Colors.background};
`;

export const Wrapper = styled.View`
  width: 100%;
  position: relative;
  flex-direction: row;
`;

export const Back = styled.TouchableOpacity`
  position: absolute;
  left: 32px;
  top: 32px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 280px;
  border-bottom-right-radius: 48px;
  border-bottom-left-radius: 48px;
`;

export const Content = styled.View`
  flex: 1;
  background: ${Colors.background};
  padding: 32px;
`;
