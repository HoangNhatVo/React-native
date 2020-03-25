import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Product from './product'
const scrollViewProduct = () => {
  return (
    <View style={{padding: 12, marginTop: 20}}>
      <View style={styles.titleSection}>
        <Text style={styles.tilte}>Thời trang</Text>
        <Text style={styles.more}>Xem thêm</Text>
      </View>
      <View style={styles.productSection}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Product />
          <Product />
          <Product /> 
          <Product />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSection: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productSection: {
    backgroundColor:'#fff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tilte: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
    color: '#000',
  },
  more: {
    fontSize: 12,
    lineHeight: 14,
    color: '#E03C3C',
  },
  image: {
    width: 115,
    height: 155,
    borderRadius: 15,
  },
  product: {
    marginRight: 20,
  },
});

export default scrollViewProduct;
