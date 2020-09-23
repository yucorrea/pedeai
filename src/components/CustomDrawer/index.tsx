import React from 'react';
import {
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Container } from './styles';

type CustomDrawerProps = DrawerContentComponentProps;
const CustomDrawer: React.FC<CustomDrawerProps> = ({ ...rest }) => (
  <Container>
    <DrawerItemList {...rest} />
  </Container>
);

export default CustomDrawer;
