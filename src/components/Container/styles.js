import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
import { Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainBackgound,
    paddingHorizontal: 10,
    minHeight: HEIGHT,
  },
});

export default styles;
