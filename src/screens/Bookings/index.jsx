import React from 'react';
import { View, Text, Button } from 'react-native';

const Bookings = ({ navigation }) => {
  return (
    <View>
      <Text>Bookings</Text>
      <Button
        title='Ir'
        onPress={() => navigation.navigate('BookingsDetails')}
      />
    </View>
  );
};

export default Bookings;
