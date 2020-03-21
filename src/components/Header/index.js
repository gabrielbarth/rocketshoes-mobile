import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, IconContainer } from './styles';

function Header() {
  const navigation = useNavigation();
  return (
    <Container>
      <Logo />

      <IconContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
      </IconContainer>
    </Container>
  );
}

export default Header;
