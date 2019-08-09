import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center'
  },
  container: {
    position: 'relative',
    height: 400
  },
  card: {
    padding: 15,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  photo: {
    height: 200,
    resizeMode: 'contain',
    marginBottom: 15
  },
  name: {
    fontSize: 24
  }
})
