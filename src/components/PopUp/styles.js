import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '80%',
    height: height * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    backgroundColor: Colors.black,
    width: width * 0.8,
    position: 'absolute',
    top: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  close: {
    color: Colors.white,
    textAlign: 'right',
    paddingHorizontal: 10,
    fontSize: 22,
  },
  mainTitle: {
    color: Colors.darkBlue,
    textAlign: 'center',
    marginBottom: 30,
  },
  title: {
  },
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 15,
  },
  iconContainer: {
    width: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hour: {
    width: 75,
  },
  textArea: {
    // borderWidth: 0,
    height: 50,
  },
});

export default styles;
