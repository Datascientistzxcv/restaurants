import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const container = StyleSheet.create({
  backgroundColor: 'orange',
  height: (height * 0.15),
  width,
  padding: 25,
  justifyContent: 'space-between'
})

export const navBar = StyleSheet.create({
  flexDirection: 'row'
})

export const optionsGroup = StyleSheet.create({
  marginLeft: 'auto',
  flexDirection: 'row'
})

export const searchOption = StyleSheet.create({
  marginRight: 15
})

export const headerText = StyleSheet.create({
  fontWeight: 'bold',
  fontSize: 32,
  color: 'white'
})
