import React from 'react';
import {View, Text} from 'react-native';
import Search from '../Components/ListProduct/Search';
import ListButton from '../Components/ListProduct/ListButton';
import ScrollViewProduct from '../Components/ListProduct/scrollViewProduct';

const ListProductPage = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={{backgroundColor:'#fff',height:'100%'}}>
      <Search />
      <ListButton navigation={navigation} />
      <ScrollViewProduct />
    </View>
  );
};

export default ListProductPage;
