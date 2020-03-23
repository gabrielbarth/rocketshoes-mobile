import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  margin: 0 auto;
  flex: 1;
`;

export const ProductList = styled.FlatList`
  margin-top: 15px;
  background: #fff;
  border-radius: 4px;
  height: 200px;
  margin: 0 15px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

export const Product = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 0 10px;
`;

export const Total = styled.Text`
  font-size: 32px;
  margin: 0 15px;
  font-weight: bold;
`;

export const TotalText = styled.Text`
  color: #999999;
  font-size: 18px;
  font-weight: bold;
`;

export const TotalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 0 15px;
  margin-bottom: 30px;
  padding: 15px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const OrderButton = styled.TouchableOpacity`
  background: #7159c1;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
  height: 42px;
  margin-top: auto;
`;

export const OrderButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductTitle = styled.Text`
  color: #333333;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 16px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const ProductSubtotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #eeeeee;
  height: 50px;
  border-radius: 4px;
`;

export const ProductAmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  text-align: center;
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductPriceContainer = styled.View``;

export const ProductPresentation = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductInfoContainer = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductDeleteButton = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const EmptyCartContainer = styled.View`
  margin: 20px;
  align-items: center;
`;
