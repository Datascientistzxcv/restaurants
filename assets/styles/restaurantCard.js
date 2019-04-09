import {StyleSheet, Dimensions} from 'react-native'
import {marginLeftAuto} from './shared'

const {width, height} = Dimensions.get('window')

const restaurantCard = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
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
    padding: 10,
    alignItems: 'baseline'
  },
  captionHeading: {
    flexDirection: 'row'
  },
  main: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    width: width * 0.5
  },
  sub: {
    ...marginLeftAuto,
    fontSize: 18
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  ratingTitle: {
    color:'orange',
    fontWeight:'bold',
    fontSize: 18
  },
  distance: {
    color: 'white',
    height: 30,
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default restaurantCard
