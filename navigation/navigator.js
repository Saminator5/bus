import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import NameScreen from '../components/SignUpParent.js';
import ChildScreen from '../components/Child.js';

const RootStackNavigator = StackNavigator(
  {
    // Child: { screen: ChildScreen }
    Name: { screen: NameScreen },
        // Number: {screen: NumberScreen }
  },
  {
   navigationOptions: () => ({
     headerTitleStyle: {
       fontWeight: 'normal',
     },
   }),
 }
);

export default class RootNavigator extends React.Component {
  componentWillMount(){
    console.log('navigator mounting 1')
  }
  componentDidMount() {
    console.log('navigator mounting: ', this.props)
  }

  render() {
    return <RootStackNavigator />;
  }
}
