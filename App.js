import * as React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// gathers the different JS files
import LogoTitle from './components/Logo';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/Search';
import AboutUsScreen from './screens/AboutUs';
import ContactUsScreen from './screens/ContactUs';
import RandomScreen from './screens/Random';
import LoginScreen from './screens/Login';
import ResourceScreen from './screens/Resource';
import AquaScreen from './screens/Aquaculture';
import AEAScreen from './screens/AEA';
import CompostScreen from './screens/Composting';
import HempScreen from './screens/HempInstitute';
import HorticultureScreen from './screens/Horticulture';
import ISFOPScreen from './screens/ISFOP';
import IPMPScreen from './screens/IPMP';
import PJCScreen from './screens/PJC';
import SRPScreen from './screens/SRP';
import WLScreen from './screens/WLS';
import FourHScreen from './screens/4-H';

// creates navigation
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// normation navigation stack
function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={LoginScreen}/>
      <Stack.Screen name="Digital Resources" component={ResourceScreen}/>
      <Stack.Screen name="Aquaculture" component={AquaScreen}/>
      <Stack.Screen name="AEA" component={AEAScreen}/>
      <Stack.Screen name="Composting" component={CompostScreen}/>
      <Stack.Screen name="Hemp Institute" component={HempScreen}/>
      <Stack.Screen name="Horticulture" component={HorticultureScreen}/>
      <Stack.Screen name="ISFOP" component={ISFOPScreen}/>
      <Stack.Screen name="IPMP" component={IPMPScreen}/>
      <Stack.Screen name="PJC" component={PJCScreen}/>
      <Stack.Screen name="SRP" component={SRPScreen}/>
      <Stack.Screen name="WLS" component={WLScreen}/>
      <Stack.Screen name="Youth 4-H" component={FourHScreen}/>
    </Stack.Navigator>
  );
}

// tab navigation with the stack nested inside
function TabStack() {
  return (
      <Tab.Navigator initialRouteName="Resources" screenOptions={{
           tabBarStyle: { 
             backgroundColor: '#2e598c' },
           tabBarActiveTintColor: 'white',
           headerStyle: {
            backgroundColor: '#2e598c',
           },
           headerTintColor: '#fff',
           headerTitleAlign: "center",
        }}>
        <Tab.Screen name="About Us" component={AboutUsScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Ionicons
              onPress={() => navigation.navigate('Register')}
              name="ios-log-in-outline"
              size={25}
              color={'white'}
              style={{ paddingRight: 10 }}
            />
          ),
          headerTitle: (props) => <LogoTitle {...props} />, 
          tabBarIcon:({tintColor})=>(<Ionicons name="ios-home" color={'white'} size={25}/>)
        })}/>
        <Tab.Screen name="Search" component={SearchScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Ionicons
              onPress={() => navigation.navigate('Register')}
              name="ios-log-in-outline"
              size={25}
              color={'white'}
              style={{ paddingRight: 10 }}
            />
          ),
          headerTitle: (props) => <LogoTitle {...props} />, 
          tabBarIcon:({tintColor})=>(
          <Ionicons name="search" color={'white'} size={25}/>)
        })} />
        <Tab.Screen name="Show Me How!" component={RandomScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Ionicons
              onPress={() => navigation.navigate('Register')}
              name="ios-log-in-outline"
              size={25}
              color={'white'}
              style={{ paddingRight: 10 }}
            />
          ),
          headerTitle: (props) => <LogoTitle {...props} />, 
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('./assets/ShowMeHowBW.png')}
              style={{ height: 25, width: 25 }}
            />
          ),
        })}/>
        <Tab.Screen name="Resources" component={StackScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Ionicons
              onPress={() => navigation.navigate('Register')}
              name="ios-log-in-outline"
              size={25}
              color={'white'}
              style={{ paddingRight: 10 }}
            />
          ),
          headerTitle: (props) => <LogoTitle {...props} />, 
          tabBarIcon:({tintColor})=>(<Ionicons name="book" color={'white'} size={25}/>),
        })}/>
        <Tab.Screen name="Contact Us" component={ContactUsScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Ionicons
              onPress={() => navigation.navigate('Register')}
              name="ios-log-in-outline"
              size={25}
              color={'white'}
              style={{ paddingRight: 10 }}
            />
          ),
          headerTitle: (props) => <LogoTitle {...props} />, 
          tabBarIcon:({tintColor})=>(<Ionicons name="newspaper" color={'white'} size={25}/>)
        })} />
      </Tab.Navigator>
  );
}

//displays the tab navigation
export default function App() {
  return (
    <NavigationContainer>
      <TabStack/>
    </NavigationContainer>
  );
}