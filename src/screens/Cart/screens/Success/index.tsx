import React, { useEffect, useState } from 'react';

import Lottie from 'lottie-react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

import { Animated, Easing } from 'react-native';
import { useCart } from '../../../../hooks/cart';

import animation from './lottie/success.json';

import { Container } from './styles';

const Success: React.FC = () => {
  const [progress] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  const { setCart } = useCart();
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setCart([]);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Cart',
            },
          ],
        }),
      );
      navigation.navigate('Request');
    });
  }, [progress, navigation, setCart]);

  return (
    <Container>
      <Lottie
        source={animation}
        speed={1.5}
        loop={false}
        progress={progress}
        style={{
          width: 102,
          height: 102,
        }}
      />
    </Container>
  );
};

export default Success;
