import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const HEIGHT_CONTAINER = 80;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEIGHT_CONTAINER,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: Colors.white,
    marginLeft: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 5,
    width: '100%',
    height: HEIGHT_CONTAINER,
    position: 'absolute',
  },
});

export default styles;
