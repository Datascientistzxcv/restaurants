import React from 'react'
import {View, ImageBackground, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ratings from './Rating.react'
import {restaurantCard} from '../../assets/styles'

import PropTypes from 'prop-types'

const RestaurantCard = props => (
  <View style={restaurantCard.container}>
    <ImageBackground
      source={{uri: props.imageUrl}}
      imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
      style={restaurantCard.imageBkg}>
      <Text style={{color: 'white', height: 30, borderRadius: 5, padding: 5, backgroundColor: 'rgba(17,17,17,0.9)', fontSize: 14}}>{props.distance}</Text>
      <Icon style={{marginLeft: 'auto'}} name={props.isFav ? 'heart' : 'heart-o'} size={19} color='white'/>
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
