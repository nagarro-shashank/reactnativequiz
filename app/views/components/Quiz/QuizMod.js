import React, { Component } from 'react';
import Quiz  from './Quiz';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

export default class QuizMod extends Component {
  constructor(props){
    super(props)
    this.state = {
      quizFinish : false,
      score: 0
    }
  }

  _quizFinish(score){  
    this.setState({ quizFinish: true, score : score })
  }
 
  render() {
    return (
      <View>
        { this.state.quizFinish ? 
        <View style={styles.scoreGraph}>
          <Text style={styles.contentCommon}>The score for the quiz is:</Text>
          <View style={styles.contentCommon}>
            <ProgressCircle
              percent={this.state.score}
              radius={50}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text>{this.state.score +'%'}</Text>
            </ProgressCircle>
          </View>
          <View style={styles.contentCommon}>
            <Button
              onPress={() => this.setState({
              quizFinish : false,
              score: 0
                })}
              title="Reset"
              color="#841584"
            />
          </View>
        </View> :  <Quiz quizFinish={(score) => this._quizFinish(score)} /> }
      </View>
    );
  }
}
const styles = StyleSheet.create({
    scoreGraph:{
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical:'center',
      flexDirection:'column'
    },
    contentCommon:{
      margin:25,
      fontSize:30
    }
});