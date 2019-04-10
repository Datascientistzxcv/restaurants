import {createStackNavigator, createAppContainer} from 'react-navigation'
import Listing from './containers/Listing.react'
import Details from './containers/Details.react'

const MainNavigator = createStackNavigator({
  Home: {
    screen: Listing,
    navigationOptions: {
      headerStyle: {display:"none"},
      headerLeft: null
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerStyle: {display:"none"},
      headerLeft: null
    }
  }
},
{
  initialRouteName: 'Home'
})

const Routes = createAppContainer(MainNavigator)

export default Routes
