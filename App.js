import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import BookingState from './src/context/Booking/state';

export default function App() {
  return (
    <BookingState>
      <NavigationContainer>
        <AppNavigation />
        <StatusBar style='auto' />
      </NavigationContainer>
    </BookingState>
  );
}
