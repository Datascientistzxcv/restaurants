import React from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

const showRatings = rating => (
  [1, 2, 3, 4, 5].map(item => (
    <Icon
      key={item}
      name={
        Math.round(rating) >= item ?
          'star' : item - rating <= 0.8 ? 'star-half-empty' : 'star-o'
      }
      size={15}
      color='orange'
      style={{margin: 5}}
    />
  ))
)

const Ratings = props => (
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
    <Text style={{color:'orange', fontWeight:'bold', fontSize: 18}}>{props.rating}</Text>
    {showRatings(props.rating)}
  </View>
)

Ratings.propTypes = {
  rating: PropTypes.number
}

export default Ratings
