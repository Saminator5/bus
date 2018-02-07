import { StyleSheet, Text, View, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  height: {
    height: height
  },
  button: {
    width: 70
  },
  lightBlue: {
    backgroundColor: '#5BC0EB',
  },
  purple: {
    backgroundColor: '#4472CA',
  },
  pink: {
    backgroundColor: '#F7B2BD',
  },
  red: {
    backgroundColor: '#A30000',
  },
  green: {
    backgroundColor: '#9BC53D',
  },
  grey: {
    backgroundColor: '#404E4D',
  },
  yellow: {
    backgroundColor: '#FDE74C',
  }
});
