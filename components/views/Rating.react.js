import React from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import {restaurantCard} from '../../assets/styles'

const showRatings = rating => (
  [1, 2, 3, 4, 5].map(item => (
    <Icon
      key={item}
      name={
        Math.round(rating) >= item ?
          'md-star' : item - rating <= 0.8 ? 'md-star-half' : 'md-star-outline'
      }
      size={15}
      color='orange'
      style={{margin: 5}}
    />
  ))
)

const Ratings = props => (
  <View style={restaurantCard.ratingContainer}>
    <Text style={restaurantCard.ratingTitle}>{props.rating.toFixed(1)}</Text>
    {showRatings(props.rating)}
  </View>
)

Ratings.propTypes = {
  rating: PropTypes.number
}

export default Ratings
