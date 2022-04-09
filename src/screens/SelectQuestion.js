import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { sizes } from '../utils/sizes'

const SelectQuestion = ({ route, navigation }) => {
    const username = route.params

    const selection = difficulty => {
        navigation.navigate('QuestionScreen', {username,difficulty})
    }
    
    return (
    <View style={styles.container}>
      <View style={styles.top}>
          <Text style={styles.text}>Select Type of Question</Text>
      </View>
      <View style={styles.down}>
          <>
            <TouchableOpacity style={styles.button} onPress={() => selection('easy')}>
                <Text style={styles.buttonText}>Easy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => selection('medium')}>
                <Text style={styles.buttonText}>medium</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => selection('hard')}>
                <Text style={styles.buttonText}>hard</Text>
            </TouchableOpacity>
          </>
      </View>
    </View>
  )
}

export default SelectQuestion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },
    top:{
        flex: 0.4,
        justifyContent: 'center'
    },
    down:{
        flex: 0.6
    },
    text:{
        fontSize: sizes.md,
        fontWeight: 'bold'
    },
    button: {
      backgroundColor: colors.purple,
      marginVertical: sizes.xxl,
      alignItems: 'center',
      paddingHorizontal: 48,
      paddingVertical: 10,
      borderRadius: 10
    },
    buttonText: {
        color: colors.white,
        fontSize: sizes.lg
    }
})