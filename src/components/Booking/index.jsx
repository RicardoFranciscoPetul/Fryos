import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Title from '../Title';
import { imagesGlobal } from '../../constants';
import PropTypes from 'prop-types';

import styles from './styles';

const Booking = ({ item, onPress }) => {
  const { schedule, place, price } = item;
  const date = new Date();
  const tomorrow = date.getDate() + 1;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.date}>
          <Title
            text={tomorrow.toString()}
            type='secondary'
            style={styles.whiteText}
          />
          <Title text='SEP' type='secondary' style={styles.whiteText} />
        </View>
        <View style={styles.details}>
          <Title type='secondary' text={place} />
          <Text
            style={styles.hour}
          >{`${schedule.start} - ${schedule.end}`}</Text>
          <Text style={{ color: '#ccc' }}>{price || 'Sin especificar'}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={imagesGlobal.IMG_CANCHA} style={styles.image} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

Booking.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

export default Booking;
