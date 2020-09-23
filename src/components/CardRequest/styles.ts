import styled, { css } from 'styled-components/native';
import { Colors, FontFamily, FontSize } from '../../constraints';

interface ProgressProps {
  progress: 0 | 1 | 2;
}

export const Container = styled.View`
  background: ${Colors.white};
  padding: 8px 16px;
  box-shadow: 10px 5px 5px #000;
  border-radius: 4px;
  margin: 16px 0px;
`;

export const Wrapper = styled.View``;

export const StatusText = styled.Text<ProgressProps>`
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.normal};
  padding: 8px 0px;
  color: ${Colors.gray};
`;

export const RequestText = styled(StatusText)`
  ${({ progress }) => progress >= 0 &&
    css`
      color: ${Colors.primary};
    `}
`;

export const ProductionText = styled(StatusText)`
  ${({ progress }) => progress >= 1 &&
    css`
      color: ${Colors.primary};
    `}
`;

export const FinishText = styled(StatusText)`
  ${({ progress }) => progress >= 2 &&
    css`
      color: ${Colors.primary};
    `}
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${FontSize.medium}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.dark};
`;

export const Bold = styled.Text`
  margin-left: 4px;
  font-size: ${FontSize.medium}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.primary};
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  margin: 16px 0px;
  justify-content: space-between;
  position: relative;
`;

export const Request = styled.TouchableOpacity<ProgressProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;

  background: ${Colors.dark_light};
  ${({ progress }) => progress >= 0 &&
    css`
      background: ${Colors.primary};
    `}
`;

export const Production = styled.TouchableOpacity<ProgressProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;

  background: ${Colors.dark_light};
  ${({ progress }) => progress >= 1
    && css`
      background: ${Colors.primary};
    `}
`;

export const Finish = styled.TouchableOpacity<ProgressProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;

  background: ${Colors.dark_light};
  ${({ progress }) => progress >= 2 &&
    css`
      background: ${Colors.primary};
    `}
`;

export const LineOpacity = styled.View`
  width: 100%;
  height: 2px;
  background: ${Colors.dark_light};
  position: absolute;
  top: 4px;
  z-index: -2;
`;

export const Progress = styled.View<ProgressProps>`
  width: 0%;

  ${({ progress }) => progress >= 1 &&
    css`
      width: 50%;
    `}

  ${({ progress }) => progress >= 2 &&
    css`
      width: 100%;
    `}

  height: 2px;
  background: ${Colors.primary};
  position: absolute;
  top: 4px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Data = styled.View``;

export const DateTitle = styled.Text`
  font-size: ${FontSize.medium}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.dark};
`;

export const DateTime = styled.Text`
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.gray};
`;

export const Client = styled.View``;

export const ClientTitle = styled.Text`
  font-size: ${FontSize.medium}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.dark};
`;

export const Name = styled.Text`
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.gray};
`;

export const Detail = styled.TouchableWithoutFeedback``;

export const DetailTitle = styled.Text`
  font-size: ${FontSize.medium}px;
  font-family: ${FontFamily.medium};
  color: ${Colors.primary};
`;
