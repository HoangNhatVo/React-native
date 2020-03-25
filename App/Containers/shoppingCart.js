import React from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';
import Product from '../Components/shoppingCart/product';
import {TextInput} from 'react-native-gesture-handler';
const shoppingCart = () => {
  return (
    <View
      style={{position: 'relative', height: '100%', backgroundColor: '#fff'}}>
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
          Giở hàng
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Product />
        <Icon name="times-circle" type="font-awesome" color="#E52B2B" />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Product />
        <Icon name="times-circle" type="font-awesome" color="#E52B2B" />
      </View>
      <View style={{bottom: 0, position: 'absolute', width: '100%'}}>
        <View style={styles.more}>
          <Text style={{fontSize: 14}}>Mã giảm giá</Text>
          <TextInput
            placeholder="nhập mã giảm giá"
            style={{
              width: 235,
              backgroundColor: '#F7F3F3',
              padding: 0,
              paddingLeft: 10,
              borderRadius: 15,
            }}
          />
        </View>
        <View style={[styles.more, styles.noBorder]}>
          <Text style={{fontSize: 14, fontWeight: '700'}}>Tổng cộng</Text>
          <Text style={{fontSize: 18, color: '#E52B2B', fontWeight: '700'}}>
            400.000đ
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight style={styles.btnOrder}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontWeight: 'bold',
                padding: 10,
              }}>
              Đặt hàng
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: 'center',
    padding: 10,
  },
  noBorder: {
    borderTopWidth: 0,
  },
  btnOrder: {
    width: 240,
    height: 40,
    marginTop: 10,
    backgroundColor: '#E52B2B',
    borderRadius: 20,
  },
});

export default shoppingCart;
