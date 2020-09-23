import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors, FontSize, FontFamily } from '../../constraints';

import Food from './screens/Food';
import Drink from './screens/Drink';

const TabTop = createMaterialTopTabNavigator();

const TabTopRoutes: React.FC = () => (
  <TabTop.Navigator
    tabBarOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.gray,
      style: {
        backgroundColor: Colors.background,
      },
      labelStyle: {
        fontSize: FontSize.regular,
        fontFamily: FontFamily.medium,
      },
      indicatorStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  >
    <TabTop.Screen name="Comidas" component={Food} />
    <TabTop.Screen name="Bebidas" component={Drink} />
  </TabTop.Navigator>
);

const ListProduct: React.FC = () => <TabTopRoutes />;

export default ListProduct;
