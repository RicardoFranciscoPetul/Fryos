import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabsNavigation from './tabs';
import BookingsDetails from '../screens/Bookings/Details';

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';

  switch (routeName) {
    case 'Home':
      return 'Inicio';
    case 'Bookings':
      return 'Reservas';
    case 'Promotions':
      return 'Promociones';
  }
}

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Inicio'>
      <Stack.Screen
        name='Inicio'
        component={TabsNavigation}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen
        name='BookingsDetails'
        component={BookingsDetails}
        options={{ title: 'Reservas' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
