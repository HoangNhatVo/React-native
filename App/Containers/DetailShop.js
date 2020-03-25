import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'
import TabView from '../Components/DetailShop/Products'
const DetailShop = () => {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View style={styles.iconleft}>
          <Icon name="arrow-left" type="font-awesome" color="#000" />
        </View>
        <Text
          style={styles.nameshop}>
          Shop áo đẹp
        </Text>
        <View style={styles.iconright}>
          <Icon name="shopping-cart" color="#424242" />
          <View style={styles.quality}>
            <Text style={styles.textquality} >2</Text>
          </View>
        </View>
      </View>
      <View style={styles.backgroundCover}>
        <View>
          <Image
            style={styles.imgcover}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaAGxUS-j4IiQVGX_V34M1zJUpQtgZug5Ig5w6ARM3MBIfudpn' }}
          />
        </View>
        <View>
          <View style={styles.backgroundAva}>
            <Image
              style={styles.imgava}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRo_YPefaGwaT4ax-M-OKRrLrI1rDdx6-mqr25_76CidbePA7E4',
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.shop}>
        <Text style={styles.name}>Shop áo đẹp</Text>
        <Text>113 người theo dõi</Text>
      </View>
      <View style={styles.viewbtn}>
        <TouchableHighlight style={styles.btnFollow}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              padding: 10,
            }}>
            Theo dõi
              </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnMes}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              padding: 10,
            }}>
            Nhắn tin
              </Text>
        </TouchableHighlight>
      </View>
      <TabView />
    </View>
  )
}

const styles = StyleSheet.create({
  viewbtn:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  btnFollow: {
    width:175,
    height: 40,
    backgroundColor: '#E52B2B',
    borderRadius: 10,
  },
  btnMes:{
    width:175,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold'
  },
  shop: {
    marginTop: 40,
    alignItems: 'center',
  },
  imgcover: {
    width: '100%',
    height: 150
  },
  imgava: {
    width: 70,
    height: 70,
    borderRadius: 50,

  },
  nameshop: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    textAlign: 'center',
  },
  iconright: {
    position: 'absolute',
    right: 20
  },
  iconleft: {
    position: 'absolute',
    left: 20
  },
  header: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 20
  },
  background: {
    backgroundColor: '#fff',
    height: "100%"
  },
  quality: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: 'red',
    position: "absolute",
    top: -10,
    right: -10
  },
  textquality: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center'
  },
  backgroundCover: {
    position: 'relative'
  },
  backgroundAva: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -30,
    left: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
})

export default DetailShop