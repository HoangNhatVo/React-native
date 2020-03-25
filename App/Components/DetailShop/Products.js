import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Product from '../ListProduct/product'
const Products = () => {
  return(
  <View style={styles.listProducts}>
    <View style={{marginBottom:10}}>
      <Text style={styles.title}>
        Sản phẩm
      </Text>
      <View style={styles.border}></View>
    </View>
    <View>
      <Product />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  border:{
    marginTop:7,
    width:36,
    height:2,
    backgroundColor:'#E52B2B'
  },
  title:{
    fontSize:16,
    lineHeight:16,
    fontWeight:'500',
    color:'#E52B2B',
  },
  listProducts:{
    marginTop:20,
    paddingHorizontal:20
  }
})
export default Products