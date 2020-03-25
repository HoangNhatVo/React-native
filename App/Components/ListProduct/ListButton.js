import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Text} from 'react-native-elements';

const ListButton = ({navigation}) => {
  const pressHandler =() =>{
    navigation.navigate('RegisterShop')
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
      }}>
      <View style={styles.btnSection}>
        <View style={[styles.circleButton, styles.color1]}>
          <Icon name="bars" color="#fff" type="font-awesome"/>
        </View>
        <Text style={{fontSize: 14, lineHeight: 14, marginTop: 10}}>
          Danh mục
        </Text>
      </View>
      <View style={styles.btnSection}>
        <View style={[styles.circleButton, styles.color2]}>
          <Icon name="gift" color="#fff" type="font-awesome" />
        </View>
        <Text style={{fontSize: 14, lineHeight: 14, marginTop: 10}}>
          Mã giảm giá
        </Text>
      </View>
      <View style={styles.btnSection}>
        <View style={[styles.circleButton, styles.color3]}>
          <Icon name="gift" color="#fff" type="font-awesome" />
        </View>
        <Text style={{fontSize: 14, lineHeight: 14, marginTop: 10}}>
          Đơn hàng
        </Text>
      </View>
      <View style={styles.btnSection}>
        <View
         style={[styles.circleButton, styles.color4]}>
          <Icon 
          onPress={pressHandler}
          name="store" 
          color="#fff"
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            lineHeight: 14,
            marginTop: 10,
            maxWidth: 60,
          }}>
          Đăng kí mở shop
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnSection: {
    alignItems: 'center',
  },
  circleButton: {
    width: 60,
    height: 60,
    // backgroundColor:'#CBB80A',
    borderRadius: 100,
    justifyContent: 'center',
  },
  color1: {
    backgroundColor: '#FBE62C',
  },
  color2: {
    backgroundColor: '#FF8B59',
  },
  color3: {
    backgroundColor: '#FF4D15',
  },
  color4: {
    backgroundColor: '#CBB80A',
  },
});
export default ListButton;
