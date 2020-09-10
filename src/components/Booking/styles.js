import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const HEIGHT_CONTAINER = 80;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: Colors.white,
  },
  date: {
    backgroundColor: Colors.blue,
    padding: 5,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: '100%',
  },
  details: {
    padding: 5,
  },
  imageContainer: {
    borderRadius: 3,
    borderColor: Colors.blue,
    borderWidth: 1,
    marginRight: 8,
    paddingVertical: 5,
    paddingHorizontal: 3,
    marginLeft: 'auto',
  },
  image: {
    resizeMode: 'contain',
    width: 60,
    height: 50,
  },
  whiteText: {
    color: Colors.white,
    textAlign: 'center',
  },
  hour: {
    color: '#727272',
  },
});

export default styles;
