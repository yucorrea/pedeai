import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { Colors } from '../constraints';

import CartCustom from '../components/CartCustom';
import Header from '../components/Header';

import Request from '../screens/Request';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Success from '../screens/Cart/screens/Success';

import Detail from '../screens/Request/screens/Detail';

const icons: any = {
  Home: {
    lib: MaterialIcons,
    icon: 'home',
  },
  Request: {
    lib: MaterialIcons,
    icon: 'list',
  },
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      header: ({ ...rest }) => <Header {...rest} />,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const CartRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="Success" component={Success} />
  </Stack.Navigator>
);

const RequestRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureDirection: 'horizontal',
      gestureEnabled: true,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="Request" component={Request} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

// Navegação em Abas
const AppRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.gray,
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'Cart') {
          return <CartCustom size={size} color={color} />;
        }

        const { lib: Icon, icon: name } = icons[route.name];

        return <Icon size={size} color={color} name={name} />;
      },
    })}
  >
    <Tab.Screen
      name="Home"
      component={HomeRoutes}
      options={{
        title: 'Início',
      }}
    />
    <Tab.Screen
      name="Request"
      component={RequestRoutes}
      options={{
        title: 'Meus Pedidos',
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartRoutes}
      options={{
        title: 'Pedidos',
      }}
    />
  </Tab.Navigator>
);

export default AppRoutes;
