import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Container = styled.View`
  background: #141419;
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const IconContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  margin-right: 5px;
`;

export const AmountContainer = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -6px;
  bottom: 12px;
`;

export const AmountText = styled.Text`
  font-size: 10px;
  color: #fff;
`;
