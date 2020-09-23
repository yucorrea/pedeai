import React from 'react';

import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../constraints';
import { useAuth } from '../hooks/auth';
import AuthRoutes from './auth.route';
import AppRoutes from './app.route';
import PrivateRoutes from './private.route';

const Routes: React.FC = () => {
  const { isEmploye, user, loading } = useAuth();

  const signed = !!user;
  const employe = signed && isEmploye;

  if (loading) {
    return (
      <View style={{ backgroundColor: Colors.background }}>
        <ActivityIndicator
          size={32}
          color={Colors.primary}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
      </View>
    );
  }
  if (employe) return <PrivateRoutes />;

  if (signed) return <AppRoutes />;

  return <AuthRoutes />;
};

export default Routes;
