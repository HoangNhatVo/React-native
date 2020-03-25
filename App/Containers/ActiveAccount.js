import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Navigation from '../Navigation';

const ActiveAccount = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#F9F9F9' }}>
      <View style={{ marginTop: 26, position: 'relative' }}>
        <View style={{ position: 'absolute', left: 20, zIndex: 1000 }}>
          <Icon name="arrow-left" type="font-awesome" onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.titleSigup}>Kích hoạt tài khoản</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 25,
            marginTop: 35,
            width: '90%',
            borderRadius: 20,
            height: 300,
            alignItems:'center'
          }}>
          <View style={styles.viewinput}>
            <Text style={styles.text}>Nhập mã xác nhận vừa gửi qua điện thoại</Text>
            <Text style={{textAlign:'center',opacity:0.3}}>6 chữ số gửi qua SMS</Text>
          </View>
          <View style={styles.flex}>
            <TextInput
              keyboardType='numeric'
              style={styles.textinput}
            />
            <TextInput
              keyboardType='numeric'
              style={styles.textinput}
            />
            <TextInput
              keyboardType='numeric'
              style={styles.textinput}
            />
            <TextInput
              keyboardType='numeric'
              style={styles.textinput}
            />
            <TextInput
              keyboardType='numeric'
              style={styles.textinput}
            />
            <TextInput
              keyboardType='numeric'
              style={styles.textinput}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableHighlight style={styles.btnSingup}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Home')}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: 10,
                  }}>
                  Kích hoạt
                </Text>
              </TouchableWithoutFeedback>
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
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 14,
    color: '#E52B2B',
  },
  viewinput: {
    marginBottom: 30,
  },
  btnSingup: {
    width: 240,
    height: 40,
    marginTop: 52,
    backgroundColor: '#E52B2B',
    borderRadius: 20,
  },
  textinput: {
    marginRight:7,
    backgroundColor: '#E5E5E5'
  },
  flex:{
    flexDirection:'row'
  }
});

export default ActiveAccount;
