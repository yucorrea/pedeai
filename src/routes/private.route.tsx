import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { Colors } from '../constraints';

import CustomDrawer from '../components/CustomDrawer';
import Dashboard from '../screens/Dashboard';
import History from '../screens/History';
import GeneratePassword from '../screens/GeneratePassword';

import ListProduct from '../screens/ListProduct';
import AddProduct from '../screens/AddProduct';
import Detail from '../screens/Request/screens/Detail';
import DetailProduct from '../screens/DetailProduct';
import EditProduct from '../screens/EditProduct';

const icons: any = {
  Dashboard: {
    lib: MaterialIcons,
    icon: 'home',
  },
  ListProduct: {
    lib: MaterialIcons,
    icon: 'description',
  },
  AddProduct: {
    lib: MaterialIcons,
    icon: 'add-circle-outline',
  },
  HistoryRequest: {
    lib: MaterialIcons,
    icon: 'history',
  },
  GeneratePassword: {
    lib: MaterialIcons,
    icon: 'vpn-key',
  },
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

const ProductRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="ListProduct" component={ListProduct} />
    <Stack.Screen name="DetailProduct" component={DetailProduct} />
    <Stack.Screen name="EditProduct" component={EditProduct} />
  </Stack.Navigator>
);

const HistoryRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="History" component={History} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

const DrawerRoutes: React.FC = () => (
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.gray,
    }}
    screenOptions={({ route }) => ({
      drawerIcon: ({ color, size }) => {
        const { lib: Icon, icon: name } = icons[route.name];
        return <Icon name={name} size={size} color={color} />;
      },
    })}
    drawerContent={({ ...rest }) => <CustomDrawer {...rest} />}
  >
    <Drawer.Screen
      name="Dashboard"
      component={DashboardRoutes}
      options={{
        title: 'Página Inicial',
      }}
    />
    <Drawer.Screen
      name="ListProduct"
      component={ProductRoutes}
      options={{
        title: 'Todos os Produtos',
      }}
    />
    <Drawer.Screen
      name="AddProduct"
      component={AddProduct}
      options={{
        title: 'Adicionar Produto',
      }}
    />
    <Drawer.Screen
      name="HistoryRequest"
      component={HistoryRoutes}
      options={{
        title: 'Histórico de Pedidos',
      }}
    />
    <Drawer.Screen
      name="GeneratePassword"
      component={GeneratePassword}
      options={{
        title: 'Gerar senha',
      }}
    />
  </Drawer.Navigator>
);

export default DrawerRoutes;
