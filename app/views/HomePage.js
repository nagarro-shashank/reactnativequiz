import React from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

var FBLoginButton = require('./LoginFB');

export default class Home extends React.Component{

  constructor(props){
    super(props);
  }
  

  render(){
    return(
      <View>
        <Text>This is homepage</Text> 
        <Button title='Login' onPress={() => this.props.navigation.navigate('QuizRT')} />
        <FBLoginButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
