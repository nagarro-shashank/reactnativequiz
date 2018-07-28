import React, {Component} from 'react';
import Home from './app/views/pages/HomePage';
import QuizMod from './app/views/components/Quiz/QuizMod'
import {StackNavigator} from 'react-navigation'

const MyRoutes= StackNavigator({
  HomeRT:{
    screen:Home
  },
  QuizRT:{
    screen:QuizMod
  }
},{
  initialRouteName:'HomeRT',
  navigationOptions:{
    title: 'NAGP QUIZ',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      justifyContent: 'space-between',
      textAlign:"center", 
      flex:1
    }
  }
});

export default class App extends Component {
  render() {
    return (
        <MyRoutes />
    );
  }
}

