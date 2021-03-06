import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';

const DetailProduct = () => {
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <View style={{position: 'relative', marginTop: 20, marginBottom: 20}}>
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
          Áo thun nữ
        </Text>
        <View style={{position: 'absolute', right: 20}}>
          <Icon name="shopping-cart" color="#424242" />
          <View style={styles.quality}>
          <Text style={styles.textquality} >2</Text>
        </View>
        </View>
      </View>
      <View>
        <View style={{backgroundColor: '#EBEAEA', alignItems: 'center'}}>
          <Image
            style={styles.image}
            source={{
              uri:
                'data:image/jpeg;base64,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',
            }}
          />
        </View>
        <Text style={{fontSize: 18, fontWeight: '700', padding: 15}}>
          150.000đ
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 15,
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}>
        <View style={{marginRight: 20}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 50}}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRo_YPefaGwaT4ax-M-OKRrLrI1rDdx6-mqr25_76CidbePA7E4',
            }}
          />
        </View>
        <View style={{marginRight: 150}}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>Shop áo đẹp</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="location-arrow" color="#ccc" type="font-awesome" />
            <Text style={{marginLeft: 10}}>Hồ Chí Minh</Text>
          </View>
        </View>
        <View>
          <Icon name="heart" color="#ccc" type="font-awesome" />
        </View>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 20}}>
        <Text style={{fontWeight: '700', fontSize: 18}}>Mô tả sản phẩm</Text>
        <FlatList
          data={[
            {key: 'Áo thun coton '},
            {key: 'Chất liệu dễ chịu'},
            {key: 'Không ra màu khi giặc'},
          ]}
          renderItem={({item}) => (
            <Text style={{marginVertical: 6}}>{item.key}</Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 230,
    height: 270,
  },
  quality:{
    width:20,
    height:20,
    borderRadius:100,
    backgroundColor:'red',
    position: "absolute",
    top:-10,
    right:-10
  },
  textquality:{
    color:'#fff',
    fontSize:12,
    textAlign:'center'
  }
});
export default DetailProduct;
