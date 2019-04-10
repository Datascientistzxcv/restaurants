import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const centerAlign = {alignItems: 'center'}
export const flexCenter = {flexDirection: 'row', ...centerAlign}

const listing = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    height: 250,
    flexDirection: 'row',
    padding: 20,
    paddingTop: 30,
    justifyContent: 'space-between',
    backgroundColor: 'gray'
  },
  actionsRow: {
    padding: 20,
    justifyContent: 'center'
  },
  firstRow: {
    ...flexCenter,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: 'space-between'
  },
  imageCircle: {
    width: 60,
    height: 60,
    borderRadius: 60
  },
  dot: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    width: 5,
    height: 5,
    borderRadius: 2,
    backgroundColor: 'grey'
  },
  distance: {
    color: 'white',
    height: 30,
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'orange',
    fontSize: 15,
    fontWeight: 'bold'
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  baseFont: {
    fontSize: 18
  },
  listItem: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 18,
    color: '#414041'
  },
  footerText: {
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 20,
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold'
  },
  listItemImage: {
    marginRight: 15,
    width: 25,
    height: 25
  },
  mapContainer: {
    height: 400,
    width: width - 40,
    padding: 20,
    marginTop: 10
  }
})

export default listing
