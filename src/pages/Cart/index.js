import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
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
