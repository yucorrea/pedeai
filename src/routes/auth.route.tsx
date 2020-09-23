import React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import SignInClient from '../screens/SignInClient';
import SignInEmployee from '../screens/SignInEmployee';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Auth.Screen name="SignInClient" component={SignInClient} />
    <Auth.Screen name="SignInEmployee" component={SignInEmployee} />
  </Auth.Navigator>
);

export default AuthRoutes;
