import {StyleSheet, Dimensions} from 'react-native'

const {height} = Dimensions.get('window')

const listing = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height - (height * 0.2)
  },
  emptyText: {
    color: 'red',
    fontSize: 25
  }
})

export default listing
