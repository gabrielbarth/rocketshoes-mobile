import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  IconContainer,
  AmountContainer,
  AmountText,
} from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  const navigation = useNavigation();
  return (
    <Container>
      <Logo />

      <IconContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <AmountContainer>
          <AmountText>{cartSize}</AmountText>
        </AmountContainer>
      </IconContainer>
    </Container>
  );
}
