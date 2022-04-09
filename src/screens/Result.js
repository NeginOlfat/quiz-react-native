import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import PieChart from 'react-native-pie-chart';
import { sizes } from '../utils/sizes';


const Result = ({ route, navigation }) => {
  
  const username = route.params.username
  const score = route.params.score
  const series = [score, 10-score]
  
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Congratulations {username}, You've scored {score} points</Text>
      </View>
      <View style={styles.pieChart}> 
        <PieChart
            widthAndHeight={250}
            series={series}
            sliceColor={[colors.purple, colors.backgroundButton]}
            doughnut={true}
            coverRadius={0.55}
            coverFill={colors.background}
        />
      </View>
      <View style={styles.homeButton}>
          <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.popToTop()}
          >
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: '5%'
  },
  top: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: sizes.xl,
    color: colors.black
  },
  pieChart: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButton: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
})