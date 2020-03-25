import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const Search = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
      <View style={styles.inputsection}>
        <Icon name="search" color="#424242" />
        <TextInput placeholder="Nhập tên sản phẩm" style={styles.input} />
      </View>
      <View style={styles.shopCart}>
        <Icon name="shopping-cart" color="#424242" />
        <View style={styles.quality}>
          <Text style={styles.textquality} >2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputsection: {
    flex: 4,
    marginLeft: 15,
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCF9F9',
  },
  input: {
    marginLeft: 15,
    flex: 1,
    padding: 5,
    backgroundColor: 'transparent',
    color: '#424242',
  },
  shopCart:{
    flex:1,
    position:'relative'
  },
  quality:{
    width:20,
    height:20,
    borderRadius:100,
    backgroundColor:'red',
    position: "absolute",
    top:-10,
    right:15
  },
  textquality:{
    color:'#fff',
    fontSize:12,
    textAlign:'center'
  }
});

export default Search;
