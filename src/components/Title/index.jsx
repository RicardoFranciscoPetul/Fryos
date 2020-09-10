import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Title = ({ text, style, ...props }) => {
  let textStyles = styles.primary;
  if (props.type === 'secondary') textStyles = styles.secondary;

  return (
    <Text style={[textStyles, style]} {...props} type={props.type}>
      {text}
    </Text>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  style: PropTypes.any,
};

Title.defaultProps = {
  type: 'primary',
};

export default Title;
