import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
} from 'react-native';
import OptionButton from '../OptionButton';

var shuffle = require('shuffle-array');

const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {"quiz" : {
  "quiz1" : {
    "question1" : {
      "correctoption" : "option4",
      "options" : {
        "option1" : "New York Bulls",
        "option2" : "Los Angeles Kings",
        "option3" : "Golden State Warriros",
        "option4" : "Huston Rocket"
      },
      "question" : "Which one is correct team name in NBA?"
    },
    "question2" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "10",
          "option2" : "11",
          "option3" : "12",
          "option4" : "13"
        },
      "question" : "5 + 7 = ?"
    },
    "question3" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "Nazi Party",
          "option2" : "Ku-Klux-Klan",
          "option3" : "Labour Party",
          "option4" : "Democratic Party"
        },
      "question" : "Hitler party which came into power in 1933 is known as"
    },
    "question4" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : " discovered four satellites of Jupiter",
          "option2" : "All of the above",
          "option3" : "developed the telescope",
          "option4" : "discovered that the movement of pendulum"
        },
      "question" : "Galileo was an Italian astronomer who"
    },
    "question5" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "Second World Nations",
          "option2" : "Third World Nations",
          "option3" : "Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and United Arab Emirates",
          "option4" : "Fourth World Nations"
        },
      "question" : "Gulf cooperation council was originally formed by"
    },
    "question6" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "UK",
          "option2" : "Fiji",
          "option3" : "India",
          "option4" : "USA"
        },
      "question" : "Golf player Vijay Singh belongs to which country?"
    },
    "question7" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "Film Finance Corporation",
          "option2" : "Foreign Finance Corporation",
          "option3" : "None of the above",
          "option4" : "Federation of Football Council"
        },
      "question" : "FFC stands for"
    },
    "question8" : {
      "correctoption" : "option4",
      "options" : {
          "option1" : "Physics and Chemistry",
          "option2" : "Physiology or Medicine",
          "option3" : "Literature, Peace and Economics",
          "option4" : "All of the above"
        },
      "question" : "For which of the following disciplines is Nobel Prize awarded?"
    },
    "question9" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "1968",
          "option2" : "1967",
          "option3" : "1922",
          "option4" : "1958"
        },
      "question" : "First human heart transplant operation conducted by Dr. Christian Bernard on Louis Washkansky, was conducted in"
    },
    "question10" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "1848",
          "option2" : "1839",
          "option3" : "1833",
          "option4" : "1843"
        },
      "question" : "First Afghan War took place in"
    }
  }
}
}
export default class Quiz extends Component {
  constructor(props){
    super(props);
    this.qno = 0
    this.score = 0
 
    let jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    shuffle(arrnew);
    this.state = {
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0
    }
 
  }
  
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++
 
      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish(this.score*100/arrnew.length)
     }
  }
  _answer(status,ans){
   
    if(status == true){
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
        if(ans == this.state.correctoption ){
          this.score += 1
        }
      }else{
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || ans == this.state.correctoption){
        this.score -= 1
       }
      }
 
  }
  render() {
    let _this = this
    const currentOptions = this.state.options
    let options = Object.keys(currentOptions).map( function(k) {
      return (  <View key={k} style={{margin:10}}>
 
        <OptionButton countCheck={_this.state.countCheck} onColor={"green"} effect={"tada"} _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]} />
 
      </View>)
    });
 
    return (
      <ScrollView style={{paddingTop: 20}}>
      <View style={styles.container}>
      <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>
      <View style={styles.oval} >
        <Text style={styles.welcome}>
          {this.state.question}
        </Text>
     </View>
        <View>
        { options }
        </View>
        <View style={{flexDirection:"row"}}>
        <Button
          onPress={() => this.next()}
          title="Next"
          color="#841584"
        />
        </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
 
  oval: {
  width: width * 90/100,
  borderRadius: 20,
  backgroundColor: 'green'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "white"
  }
});