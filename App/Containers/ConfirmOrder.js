import React from 'react';
import {View, Text, Button, StyleSheet, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';
import Product from '../Components/Confirmorder/product';
import Bills from '../Components/Confirmorder/bill';
const ConfirmOrder = () => {
  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <View style={{position: 'relative', marginTop: 26}}>
        <View style={{position: 'absolute', left: 20}}>
          <Icon name="arrow-left" type="font-awesome" color="#000" />
        </View>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 21,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Xác nhận đơn hàng
        </Text>
      </View>
      <View style={styles.pay}>
        <Text style={{fontSize: 16, lineHeight: 19, fontWeight: '700'}}>
          Thanh toán
        </Text>
        <Text>Khi nhận hàng</Text>
      </View>
      <View>
        <Product />
      </View>
      <View>
        <Bills />
      </View>
      <View style={{bottom: 10, position: 'absolute', left: '23%'}}>
        <TouchableHighlight style={styles.btnSingup}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              padding: 10,
            }}>
            Xác nhận
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  pay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  btnSingup: {
    width: 240,
    height: 40,
    marginTop: 32,
    backgroundColor: '#E52B2B',
    borderRadius: 20,
  },
});

export default ConfirmOrder;
