import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Bills = () => {
  return (
    <View style={{paddingHorizontal: 20, marginTop: 15}}>
      <View style={[styles.flex, styles.borderBot]}>
        <Text>Phí vận chuyển</Text>
        <Text style={{fontWeight: '700'}}>20.000d</Text>
      </View>
      <Text style={{fontWeight: '700', paddingVertical: 10}}>Đơn hàng</Text>
      <View style={styles.flex}>
        <Text>Tổng giá tiền</Text>
        <Text style={{fontWeight: '700'}}>200.000đ</Text>
      </View>
      <View style={styles.flex}>
        <Text>Phí vận chuyển</Text>
        <Text style={{fontWeight: '700'}}>20.000đ</Text>
      </View>
      <View style={styles.flex}>
        <Text>Giảm giá</Text>
      </View>
      <View style={styles.flex}>
        <Text>Tổng đơn hàng</Text>
        <Text style={{fontWeight: '700', color: '#E52B2B'}}>220.000đ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderBot: {
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});
export default Bills;
