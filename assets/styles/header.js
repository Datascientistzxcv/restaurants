import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

const header = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    height: (height * 0.15),
    width,
    padding: 25,
    justifyContent: 'space-between'
  },
  navBar: {
    flexDirection: 'row'
  },
  optionsGroup: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  searchOption: {
    marginRight: 15
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white'
  }
})

export default header
