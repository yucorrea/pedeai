import styled from 'styled-components/native';
import { Colors, FontSize, FontFamily } from '../../constraints';
import ButtonComponent from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 16px 32px;
  align-items: center;
  justify-content: center;
  background: ${Colors.background};
`;

export const Alert = styled.Text`

color: ${Colors.primary}
font-size: ${FontSize.regular}px;
margin: 16px 0px;
`;

export const Button = styled(ButtonComponent)`
  margin-top: 74px;
`;
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 16px 0px;
`;

export const Client = styled.TouchableWithoutFeedback``;

export const ClientText = styled.Text`
  color: ${Colors.primary};
  font-size: ${FontSize.medium}px;
  font-family: ${FontFamily.medium};
  margin-right: 8px;
`;

export const Employee = styled.TouchableWithoutFeedback``;

export const EmployeeText = styled.Text`
  color: ${Colors.gray};
  font-size: ${FontSize.medium}px;
  font-family: ${FontFamily.medium};
`;
