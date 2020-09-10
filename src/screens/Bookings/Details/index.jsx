import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { Container, SubCategory, Title, PopUp } from '../../../components';
import { Colors } from '../../../constants';
import bookingContext from '../../../context/Booking/context';

const BookingDetails = ({ route, navigation }) => {
  const BookingContext = useContext(bookingContext);
  const { makeBooking } = BookingContext;

  const { item } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const onPress = item => {
    if (!item.available) return;
    setModalVisible(true);
    setCurrentItem(item);
    // setModalVisible(false)
  };

  const reserve = () => {
    makeBooking(item, currentItem);
    navigation.goBack();
  };
  return (
    <ScrollView>
      <Container>
        <PopUp
          isVisible={modalVisible}
          schedule={currentItem}
          item={item}
          onPress={reserve}
          onClose={() => setModalVisible(false)}
        />
        <Title text='Seleccionar categoria' />
        <FlatList
          data={item.subcategories}
          renderItem={({ item }) => <SubCategory name={item.name} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 10 }}
        />
        <Title
          type='secondary'
          style={styles.secondaryTitle}
          text='Observaciones'
        />
        <Text>{item.observations}</Text>
        <Title
          type='secondary'
          style={styles.secondaryTitle}
          text='Valor de la reserva'
        />
        <Text>{item.price}</Text>
        <Title
          type='secondary'
          style={styles.secondaryTitle}
          text='Horario disponible'
        />
        {item.schedule.schedules.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => onPress(item)}>
            <Title
              style={[styles.schedule, !item.available && styles.noAvailable]}
              text={`${item.start} - ${item.end}`}
            />
          </TouchableOpacity>
        ))}
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  secondaryTitle: {
    marginTop: 15,
    marginBottom: 5,
  },
  schedule: {
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  noAvailable: {
    backgroundColor: Colors.gray,
    opacity: 0.5,
  },
});

export default BookingDetails;
