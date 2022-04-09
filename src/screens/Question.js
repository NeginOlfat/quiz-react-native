import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import { colors } from '../utils/colors'
import { sizes } from '../utils/sizes';
import { easy } from '../data/easy';
import { medium } from '../data/medium';
import { hard } from '../data/hard'

const Question = ({ route, navigation }) => {

  const [questionNum, setQuestionNum] = useState(0)
  const [score,setScore] = useState(0)
  const [touch,setTouch] = useState(false)
  const [isTrue,setIsTrue] = useState(null)
  const [data,setDate] = useState(easy)
  const [answerItem,setAnswerItem] = useState()

  const username = route.params.username;
  const difficulty = route.params.difficulty;
  
  useEffect(() =>{
    if(difficulty == 'hard')
      setDate(hard)
    else if(difficulty == 'medium')
      setDate(medium)
    else if(difficulty == 'easy')
      setDate(easy)
  },[]);

  useEffect(()=>{
    setAnswerItem( data[questionNum].answers.map((item,index) => (
      <TouchableOpacity
          style={(!touch)? styles.answerbutton : ( (isTrue)? styles.answerTrue : styles.answerFalse) }
          disabled={(touch)? true: false}
          onPress={() => {
            if(!touch)
              selection(data[questionNum].correctIndex,index)
          }}
        >
          <Text style={styles.answerText}>{item}</Text>
      </TouchableOpacity>
    )));
  },[touch]);

  const nextQuestion = () =>  {
    if(questionNum < data.length-1){
      setQuestionNum(questionNum+1)
      setTouch(false)
    }
    else
      endQuize()
  }

  const selection = (correctIndex,itemIndex) =>{
    if(correctIndex == itemIndex){
      setScore(score + 1) 
      setIsTrue(true)
    }
    else {
      setIsTrue(false)
    }
    
    setTouch(true)
  }

  const endQuize = () =>{
    navigation.navigate('ResultScreen', {username,score})
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.numbers}>{questionNum+1}/{data.length}</Text>
        <Text style={styles.questionText}>{data[questionNum].question}</Text>
      </View>
      <View style={styles.answers}>
        <>
        {answerItem}
        </>
      </View>
      <View style={styles.down}>
          <TouchableOpacity 
           style={styles.button}
           onPress={() => endQuize()}
          >
            <Text style={styles.buttonText}>End</Text>
          </TouchableOpacity>
        
          <TouchableOpacity
           style={styles.button}
           onPress={() => {nextQuestion()}}
          >
            <Text style={styles.buttonText} >Next</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Question

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: '5%'
  },
  top: {
    flex: 0.3,
    justifyContent: 'space-around',
    paddingBottom: '4%',
  },
  numbers:{
    fontSize: sizes.lg,
    color: colors.purple
  },
  answers: {
    flex: 0.5,
    justifyContent: 'space-around',
    marginBottom: sizes.xxxl,
    
  },
  answerText: {
    fontSize: sizes.lg,
    color: colors.black,
   
  },
  answerbutton: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    backgroundColor: colors.backgroundButton,
    padding: 8,
    alignItems: 'center'
  },
  answerTrue: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    backgroundColor: colors.lightGreen,
    padding: 8,
    alignItems: 'center'
  },
  answerFalse: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    backgroundColor: colors.pink,
    padding: 8,
    alignItems: 'center'
  },
  down: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 48,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.lg
  },
  questionText: {
    fontSize: sizes.lg
  }
})