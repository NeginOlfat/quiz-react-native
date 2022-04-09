import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';


const Home = ({ navigation }) => {

    const [username,setUserame] = useState('')
    
  return (
    <View style={styles.container}>
        <View style={styles.image}>
            <Image source={require('../assets/QuizHome.png')} 
            style={{ width: 400, height: 400 }}/>
        </View>
        <View style={styles.input}>
            <Text style={styles.text}>Enter your name :</Text>
            <TextInput
             style={styles.textInput}
             onChangeText={text => setUserame(text)}
            />
        </View>
        <View style={styles.down}>
            <TouchableOpacity 
             style={styles.button}
             onPress={() => navigation.navigate('SelectQuestionScreen',username)}
            >
                <Text style={styles.buttonText} >Start</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },
    image: {
        flex: 0.6,
        justifyContent: 'flex-end',
    },
    input: {
        flex:0.3,
       
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: colors.purple,
        fontSize: sizes.md,
        fontWeight: 'bold'

    },
    text: {
        fontSize: sizes.lg,
        fontWeight: 'bold',
    },
    down: {
        flex: 0.2,
        justifyContent: 'flex-start'
    },
    button: {
        backgroundColor:colors.darkBlue,
        paddingHorizontal: 48,
        paddingVertical: 10,
        borderRadius: 10

    },
    buttonText: {
        color: colors.white,
        fontSize: sizes.lg
    }
})