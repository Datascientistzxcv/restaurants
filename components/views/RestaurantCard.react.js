import React from 'react'
import {View, ImageBackground, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
import Ratings from './Rating.react'
import TouchAble from '../views/TouchAble.react'
import restaurantCard from '../../assets/styles/restaurantCard'
import {marginLeftAuto} from '../../assets/styles/shared'
import trimText from '../../utils/trimText'

const RestaurantCard = props => {
  const {name, image_url, categories, rating, distance} = props.item

  return (
    <TouchAble
      style={restaurantCard.container}
      onPress={() => {
        props.goto('Details', {name: 'Jane'})
      }}>
      <View>
        <ImageBackground
          source={{uri: image_url}}
          imageStyle={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}
          style={restaurantCard.imageBkg}>
          <Text style={restaurantCard.distance}>{`${distance.toFixed(1)} km`}</Text>
          <Icon
            style={marginLeftAuto}
            name={props.isFav ? 'ios-heart' : 'ios-heart-empty'}
            size={25}
            color='white'
          />
        </ImageBackground>
        <View style={restaurantCard.caption}>
          <View style={restaurantCard.captionHeading}>
            <Text style={restaurantCard.main}>{trimText(name)}</Text>
            <Text style={restaurantCard.sub}>{categories[0].title.toUpperCase()}</Text>
          </View>
          <Ratings rating={rating} />
        </View>
      </View>
    </TouchAble>
  )
}

RestaurantCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired
  })
}

RestaurantCard.defaultProps = {
  isFav: false
}

export default RestaurantCard
