import React, { useState } from 'react';
import {
  Modal,
  Text,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import Title from '../Title';
import { Colors } from '../../constants';
import PropTypes from 'prop-types';

const PopUp = ({ isVisible, children, onPress, onClose, ...props }) => {
  const [value, onChangeText] = useState('');
  const { place } = props.item;
  const { start, end } = props.schedule;

  return (
    <View style={styles.centeredView}>
      <Modal
        {...props}
        animationType='slide'
        transparent={true}
        visible={isVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableWithoutFeedback onPress={onClose}>
              <View style={styles.header}>
                <Text style={styles.close}>x</Text>
              </View>
            </TouchableWithoutFeedback>
            <Title text='Datos de reserva' style={styles.mainTitle} />
            <Text style={styles.title}>Información</Text>
            <View style={styles.itemContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome
                  name='map-marker'
                  size={24}
                  color={Colors.darkBlue}
                />
              </View>
              <View style={styles.item}>
                <Title text='Lugar' style={styles.title} />
                <Title text={place} type='secondary' />
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome
                  name='calendar-o'
                  size={24}
                  color={Colors.darkBlue}
                />
              </View>
              <View style={styles.item}>
                <Title text='Fecha' style={styles.title} />
                <Title text='Septiembre' type='secondary' />
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome
                  name='calendar-o'
                  size={24}
                  color={Colors.darkBlue}
                />
              </View>
              <View style={styles.item}>
                <Title text='Hora' style={styles.title} />
                <View style={styles.row}>
                  <View style={styles.hour}>
                    <Title text='Inicio:' style={styles.title} />
                  </View>
                  <Title text={start} type='secondary' />
                </View>
                <View style={styles.row}>
                  <View style={styles.hour}>
                    <Title text='Fin:' style={styles.title} />
                  </View>
                  <Title text={end} type='secondary' />
                </View>
              </View>
            </View>
            <Text style={styles.title}>Observaciones</Text>
            <TextInput
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder='Escriba aquii...'
              style={styles.textArea}
            />
            <Button
              onPress={onPress}
              title='Crear reserva'
              color={Colors.blue}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

PopUp.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopUp;
