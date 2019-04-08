/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import RestCard from './components/views/RestaurantCard.react'

export default class App extends Component {
  render() {
    return (
      <RestCard
        isFav={false}
        title='That one pizza place'
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        category='ITALIAN'
        rating={3.3}
        distance='2.1 km'
      />
    )
  }
}
