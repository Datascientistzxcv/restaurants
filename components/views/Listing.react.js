import React from 'react'
import {FlatList, View, Text} from 'react-native'
import PropTypes from 'prop-types'
import RestaurantCard from './RestaurantCard.react'
import listing from '../../assets/styles/listing'

const keyExtractor = (item) => item.id
const EmptyList = () => (
  <View style={listing.emptyContainer}>
    <Text style={listing.emptyText}>{'Nothing to show'}</Text>
  </View>
)

const Listing = props => (
  <FlatList
    data={props.data}
    keyExtractor={keyExtractor}
    ListEmptyComponent={EmptyList}
    onEndReached={() =>  props.fetchMore()}
    renderItem={({item}) =>
      <RestaurantCard item={item} id={item.id} goto={props.goto}/>
    }
  />
)

Listing.propTypes = {
  data: PropTypes.array.isRequired,
  goto: PropTypes.func.isRequired,
  fetchMore: PropTypes.func.isRequired
}

export default Listing
