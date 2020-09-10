import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Promotions from '../screens/Promotions';
import Bookings from '../screens/Bookings';
import { Colors } from '../constants';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Bookings'
      tabBarOptions={{
        activeTintColor: Colors.blue,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Bookings'
        component={Bookings}
        options={{
          tabBarLabel: 'Reservas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='bell' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Promotions'
        component={Promotions}
        options={{
          tabBarLabel: 'Promos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='sale' color='red' size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Tabs() {
  return <MyTabs />;
}
