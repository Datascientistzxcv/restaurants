import {StyleSheet, Dimensions} from 'react-native'


const {width, height} = Dimensions.get('window')

export const restaurantCard = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  caption: {
    margin: 0,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  imageBkg: {
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: 'row',
    padding: 10
  },
  captionHeading: {
    flexDirection: 'row'
  },
  main: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20
  },
  sub: {
    marginLeft: 'auto',
    fontSize: 18
  },
  rating: {
    color:  'orange'
  }
})
