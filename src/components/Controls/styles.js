import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    borderRadius: 75
  },
  buttonImage: {
    width: 75,
    height: 75,
    resizeMode: 'contain'
  },
  disabled: {
    opacity: .5
  }
});
