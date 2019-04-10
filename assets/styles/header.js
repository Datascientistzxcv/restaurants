import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

const header = StyleSheet.create({
  container: {
    backgroundColor: '#FCAC0B',
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
    marginBottom: 5,
    alignItems: 'center'
  },
  searchOption: {
    marginRight: 20,
  },
  searchInput: {
    borderWidth: 0,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: width * 0.6,
    // height: 20,
    color: 'white',
    padding: 0,
    margin: 0,
    marginLeft: 5,
    marginRight: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white'
  }
})

export default header
