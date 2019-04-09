import React from 'react'
import {View, Dimensions, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')

const Header = props => {
  return (
    <View
      style={{backgroundColor: 'orange',
        height: (height * 0.15),
        width,
        padding: 25
      }}>
      <View
        style={{
          flexDirection: 'row'
        }}>
        <Icon name='md-arrow-back' size={25} color='white'/>
        <View style={{marginLeft: 'auto', flexDirection: 'row'}}>
          <Icon name='md-search' size={25} color='white' style={{marginRight: 15}}/>
          <Icon name='md-options' size={25} color='white'/>
        </View>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 32, color: 'white'}}>{'Restaurants'}</Text>
    </View>
  )
}

export default Header
