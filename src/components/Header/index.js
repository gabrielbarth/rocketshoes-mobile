import React from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  IconContainer,
  AmountContainer,
  AmountText,
} from './styles';

function Header({ cartSize }) {
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

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
