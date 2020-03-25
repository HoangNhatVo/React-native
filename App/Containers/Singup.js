import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Icon} from 'react-native-elements';

const Singup = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#F9F9F9'}}>
      <View style={{marginTop: 26, position: 'relative'}}>
        <View style={{position: 'absolute', left: 20,zIndex:1000}}>
          <Icon name="arrow-left" type="font-awesome" onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.titleSigup}>Tạo tài khoản</Text>
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
            <Text style={styles.text}>Số điện thoại</Text>
            <TextInput style={styles.input} placeholder="Nhập số điện thoại" />
          </View>
          <View style={styles.viewinput}>
            <Text style={styles.text}>Mật khẩu</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Nhập mật khẩu"
            />
          </View>
          <View style={styles.viewinput}>
            <Text style={styles.text}>Nhập lại mật khẩu</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Nhập lại mật khẩu"
            />
          </View>
          <View style={styles.viewinput}>
            <Text style={styles.text}>Tên hiển thị</Text>
            <TextInput style={styles.input} placeholder="Họ và tên" />
          </View>
          <View>
            <Text style={styles.text}>Email(không bắt buộc)</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="example@gmail.com"
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableHighlight style={styles.btnSingup} onPress={() => navigation.navigate('activeaccount')}>
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

export default Singup;
