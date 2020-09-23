import React from 'react';

import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './constraints';

import { CartProvider } from './hooks/cart';
import { AuthProvider } from './hooks/auth';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
  </NavigationContainer>
);

export default App;
