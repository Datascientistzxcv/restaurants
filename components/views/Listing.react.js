import React from 'react'
import {FlatList, View, Text, Dimensions} from 'react-native'
import RestaurantCard from './RestaurantCard.react'

const {width, height} = Dimensions.get('window')

const keyExtractor = (item, index) => item.id
const EmptyList = () => (
  <View style={{alignItems: 'center', justifyContent: 'center', height: height - (height * 0.2)}}>
    <Text style={{color: 'red', fontSize: 25}}>{'Nothing to show'}</Text>
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

export default Listing
