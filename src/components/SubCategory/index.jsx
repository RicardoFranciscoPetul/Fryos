import React from 'react';
import { View, Image, Text } from 'react-native';
import { imagesGlobal } from '../../constants/index';
import PropTypes from 'prop-types';

import styles from './styles';

const SubCategory = ({ name }) => {
  return (
    <View style={styles.container}>
      <Image source={imagesGlobal.ICON_PERSON} style={styles.image} />
      <Text style={styles.name}>{name || 'Sin nombre'}</Text>
    </View>
  );
};

SubCategory.propTypes = {
  name: PropTypes.string,
};

export default SubCategory;
