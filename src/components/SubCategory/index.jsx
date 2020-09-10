import React from 'react';
import { View, Image, Text } from 'react-native';
import { imagesGlobal } from '../../constants/index';

import styles from './styles';

const SubCategory = ({ name }) => {
  return (
    <View style={styles.container}>
      <Image source={imagesGlobal.ICON_PERSON} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default SubCategory;
