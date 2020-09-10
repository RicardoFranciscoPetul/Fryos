import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import Title from '../Title';

import styles from './styles';

const Category = ({ item, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <Title text={item.title} style={styles.title} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Category;
