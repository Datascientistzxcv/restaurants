import {StyleSheet, Dimensions} from 'react-native'

const {height} = Dimensions.get('window')

const activityIndicator = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height - (height * 0.2)
  }
})

export default activityIndicator
