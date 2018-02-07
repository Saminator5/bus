import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation'
import SignUpDriver from '../components/SignUpDriver.js'
import SignUpParent from '../components/SignUpParent.js'
import ChildScreen from '../components/Child.js'
import ConfirmCode from '../components/confirmCode.js'
import SignUp from '../components/SignUp.js'
const RootStackNavigator = StackNavigator(
  {
    // SignUp: { screen: SignUp }
    // SignUpParent: { screen: SignUpParent },
    // SignUpDriver: { screen: SignUpDriver },
    ConfirmCode: { screen: ConfirmCode },
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
    console.log('navigator will mount')
  }
  componentDidMount() {
    console.log('navigator did mount ', this.props)
  }

  render() {
    return <RootStackNavigator />;
  }
}
