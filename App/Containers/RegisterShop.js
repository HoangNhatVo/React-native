import React, {useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button
} from 'react-native';
import {Icon} from 'react-native-elements';

const RegisterShop = ({navigation}) => {
  const PressBack = () =>{
    console.log('back')
    navigation.goBack()
  }
  return (
    <View style={{backgroundColor: '#F9F9F9'}}>
      <View style={{marginTop: 26, position: 'relative'}}>
        <View style={{backgroundColor:'red', position: 'absolute', left: 20,backgroundColor:'red',opacity:1000}}>
          <Icon name="arrow-left" type="font-awesome" onPress={PressBack} />
        </View>
        <Text style={styles.titleSigup}>Đăng kí nhà bán hàng</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 25,
            marginTop: 35,
            width: '90%',
            borderRadius: 20,
          }}>
          <View style={styles.viewinput}>
            <Text style={styles.text}>Họ và tên *</Text>
            <TextInput style={styles.input} placeholder="Nhập họ tên" />
          </View>
          <View style={styles.viewinput}>
            <Text style={styles.text}>Số điện thoại *</Text>
            <TextInput style={styles.input} placeholder="Nhập số điện thoại" />
          </View>
          <View style={styles.viewinput}>
            <Text style={styles.text}>Email *</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Nhập lại mật khẩu"
            />
          </View>
          <View style={styles.viewinput}>
            <Text style={styles.text}>Tên shop *</Text>
            <TextInput style={styles.input} placeholder="Nhập tên shop" />
          </View>
          <View>
            <Text style={styles.text}>Địa chỉ shop *</Text>
            <TextInput style={styles.input} placeholder="Nhập địa chỉ shop" />
          </View>
          <View>
            <Text style={styles.text}>Link facebook/Instagram *</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập link facebook/instagram"
            />
          </View>
          <View>
            <Text style={styles.text}>Link website</Text>
            <TextInput style={styles.input} placeholder="Nhập link website" />
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableHighlight style={styles.btnSingup}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: 10,
                }}>
                Đăng kí
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSigup: {
    opacity:1,
    backgroundColor:'#ccc',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    color: '#E52B2B',
  },
  viewinput: {
    marginBottom: 15,
  },
  btnSingup: {
    width: 240,
    height: 40,
    marginTop: 32,
    backgroundColor: '#E52B2B',
    borderRadius: 20,
  },
});

export default RegisterShop;
