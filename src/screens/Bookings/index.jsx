import React, { useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Category, Container, Booking, Title } from '../../components';

import bookingContext from '../../context/Booking/context';

const Bookings = ({ navigation }) => {
  const BookingContext = useContext(bookingContext);
  const { categories, bookings } = BookingContext;

  const goToBooking = item => navigation.navigate('BookingsDetails', { item });

  return (
    <Container>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category item={item} onPress={() => goToBooking(item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<Title text='Categorias' />}
        ListFooterComponent={
          <FlatList
            data={bookings}
            renderItem={({ item }) => <Booking item={item} />}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={<Title text='Mis reservas' />}
            ListFooterComponent={<View style={{ height: 150 }} />}
            ListEmptyComponent={
              <Text type='secondary' text=''>
                Selecciona una categoria y has una reserva.
              </Text>
            }
          />
        }
      />
    </Container>
  );
};

export default Bookings;
