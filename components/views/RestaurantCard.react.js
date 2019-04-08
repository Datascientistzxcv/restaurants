import React from 'react'
import {View, ImageBackground, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ratings from './Rating.react'
import {restaurantCard, marginLeftAuto} from '../../assets/styles'

import PropTypes from 'prop-types'

const RestaurantCard = props => (
  <View style={restaurantCard.container}>
    <ImageBackground
      source={{uri: props.imageUrl}}
      imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
      style={restaurantCard.imageBkg}>
      <Text style={restaurantCard.distance}>{props.distance}</Text>
      <Icon
        style={marginLeftAuto}
        name={props.isFav ? 'heart' : 'heart-o'}
        size={25}
        color='white'
      />
    </ImageBackground>
    <View style={restaurantCard.caption}>
      <View style={restaurantCard.captionHeading}>
        <Text style={restaurantCard.main}>{props.title}</Text>
        <Text style={restaurantCard.sub}>{props.category}</Text>
      </View>
      <Ratings rating={props.rating} />
    </View>
  </View>
)

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  isFav: PropTypes.bool,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  rating: PropTypes.number
}

RestaurantCard.defaultProps = {
  isFav: false
}

export default RestaurantCard
