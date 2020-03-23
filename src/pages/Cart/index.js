import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ProductList,
  Product,
  Total,
  TotalText,
  TotalContainer,
  OrderButton,
  OrderButtonText,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAmountContainer,
  ProductAmount,
  ProductSubtotalContainer,
  ProductPriceContainer,
  ProductInfoContainer,
  ProductPresentation,
  ProductDeleteButton,
  ProductControlButton,
  EmptyCartContainer,
} from './styles';
import { formatPrice } from '../../util/format';

import Header from '../../components/Header';

import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <Header />
      {cart.length ? (
        <>
          <ProductList
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item: product }) => (
              <Product>
                <ProductPresentation>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductInfoContainer>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice> {product.priceFormatted}</ProductPrice>
                  </ProductInfoContainer>
                </ProductPresentation>
                <ProductSubtotalContainer>
                  <ProductAmountContainer>
                    <ProductControlButton onPress={() => decrement(product)}>
                      <Icon name="remove-circle" color="#7159c1" size={24} />
                    </ProductControlButton>
                    <ProductAmount value={String(product.amount)} />
                    <ProductControlButton onPress={() => increment(product)}>
                      <Icon name="add-circle" color="#7159c1" size={24} />
                    </ProductControlButton>
                  </ProductAmountContainer>
                  <ProductDeleteButton
                    onPress={() => removeFromCart(product.id)}
                  >
                    <Icon name="delete" color="#7159c1" size={24} />
                  </ProductDeleteButton>

                  <ProductPriceContainer>
                    <ProductPrice> {product.subtotal}</ProductPrice>
                  </ProductPriceContainer>
                </ProductSubtotalContainer>
              </Product>
            )}
          />
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <Total>{total}</Total>
            <OrderButton>
              <OrderButtonText>CHECKOUT</OrderButtonText>
            </OrderButton>
          </TotalContainer>
        </>
      ) : (
        <EmptyCartContainer>
          <Icon name="remove-shopping-cart" color="#fff" size={100} />
          <ProductTitle> No products here. </ProductTitle>
        </EmptyCartContainer>
      )}
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
