import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    width: 110,
    height: 150,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 10,
  },
});

export default styles;
