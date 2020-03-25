import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Icon } from 'react-native-elements';
import logo from '../asset/image/logo.png';

const WCscreen = ({navigation}) => {
  return (
    <View style={styles.background}>
      <View style={styles.logo}>
        <Image
          source={logo}
        />
        <Text style={styles.name}>16-VLS-HCMUS</Text>
      </View>
      <View style={styles.sectionbtn}>
        <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('SignIn')} >
          <View style={styles.flex}>
            <Icon name="user-circle" color="#000" type="font-awesome" />
            <Text style={{ marginLeft: 20 }}>
              Đăng nhập bằng số điện thoại
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.btn, styles.margintop]} >
            <View style={styles.flex}>
              <Icon name="facebook-square" color="#0300AA" type="font-awesome" />
              <Text style={{ marginLeft: 20 }}>
                Đăng nhập bằng facebook
            </Text>
            </View>
        </TouchableHighlight>
      </View>
      <View style={[styles.flex, styles.bottom]}>
        <Text>
          Bạn không có tài khoản?
        </Text>
        <Text style={styles.textsingup} onPress={() => navigation.navigate('SignUp')}> Đăng ký</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
  logo: {
    alignItems: 'center',
    marginTop: 90
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 40
  },
  flex: {
    alignItems:'center',
    flexDirection: 'row'
  },
  sectionbtn: {
    marginTop:30,
    alignItems: 'center'
  },
  btn: {
    padding: 7,
    paddingLeft: 10,
    borderWidth: 1,
    width: 295,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.2)"
  },
  margintop:{
    marginTop:25
  },
  bottom:{
    position:'absolute',
    bottom:15,
    justifyContent:'center',
    alignItems:'center',
    left:0,
    right:0
  },
  textsingup:{
    color:'#FE0000'
  }
})
export default WCscreen