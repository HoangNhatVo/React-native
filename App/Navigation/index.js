import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '../Components/Icon';
import SingUp from '../Containers/Singup';
import SignIn from '../Containers/Singin';
import ListProductPage from '../Containers/ListProductPage'
import ActiveAccount from '../Containers/ActiveAccount'
import {Text, View} from 'react-native';
import WCscreen from '../Containers/WelcomeScreen';

const Stack = createStackNavigator();
const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#FAFAFA',
  },
});

function Screen1() {
  return (
    <View style={style.screen}>
      <Text>Screen1</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={style.screen}>
      <Text>Screen2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={style.screen}>
      <Text>Screen3</Text>
    </View>
  );
}

function Screen4() {
  return (
    // <View style={style.screen}>
    //   <Text>Screen4</Text>
    // </View>
    <ListProductPage />
  );
}
function Screen5() {
  return (
    <View style={style.screen}>
      <Text>Screen5</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            onPress={onPress}
            style={style.tabBar}>
            <Icon
              name={route.name}
              status={isFocused ? 'active' : 'inactive'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Screen1"
      tabBarOptions={{
        showLabel: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="home" key="home" component={Screen1} />
      <Tab.Screen name="live" key="live" component={Screen2} />
      <Tab.Screen name="plus" key="plus" component={Screen3} />
      <Tab.Screen name="shop" key="shop" component={Screen4} />
      <Tab.Screen name="user" key="user" component={Screen5} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode={'none'} initialRouteName="wcscreen">
      <Stack.Screen name='wcscreen' component ={WCscreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SingUp} />
      <Stack.Screen name="ListProductPage" component={ListProductPage} />
      <Stack.Screen name="activeaccount" component={ActiveAccount} />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
