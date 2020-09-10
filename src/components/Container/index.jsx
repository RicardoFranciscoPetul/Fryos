import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
