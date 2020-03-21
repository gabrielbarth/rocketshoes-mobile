import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Product,
  ProductList,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';
import Header from '../../components/Header';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Header />
        <ProductList
          data={products}
          horizontal
          keyExtractor={product => product.id}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} size={200} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <ProductButton>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>{0}</ProductAmountText>
                </ProductAmount>

                <ProductButtonText>ADD TO CART</ProductButtonText>
              </ProductButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}

export default Home;
