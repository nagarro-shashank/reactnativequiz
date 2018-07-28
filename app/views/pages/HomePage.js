import React from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import QuizMod from '../components/Quiz/QuizMod';

export default class Home extends React.Component{

  constructor(props){
    super(props);
    this.state={
      loggedIn:false
    }
  }
  
  loginSuccess(){
    this.setState({loggedIn:true})
  }

  render(){
    
    if(this.state.loggedIn){
      return ( 
      <View>  
        <QuizMod />
      </View>  
    );
    }

    else{
    return(
      <View>
        <Text style={styles.login}>Please sign-in using social login</Text> 
        <View style={styles.loginOption}>
          <View>
            <LoginButton
            readPermissions={["email"]}
            onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                this.loginSuccess()
              }
              }
            }
          onLogoutFinished={() => alert("User logged out")}/>
          </View>
        </View>
      </View>
    );}
  }
}

const styles = StyleSheet.create({
  login: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  loginOption: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  }
});
