import React, {useState} from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TouchAble from './TouchAble.react'
import header from '../../assets/styles/header'
import PropTypes from 'prop-types'

const Header = props => {
  const {container, navBar, optionsGroup, searchOption, headerText} = header
  const {goto, search} = props
  const [isSearchBarShown, toggleSearchBar] = useState(false)

  return (
    <View
      style={container}>
      <View
        style={navBar}>
        <TouchAble onPress={() => goto('Home')}>
          <Icon name='md-arrow-back' size={25} color='white'/>
        </TouchAble>
        <View style={optionsGroup}>
          {
            isSearchBarShown ?
              <Text style={searchOption}>{'The search bar'}</Text> :
              <TouchAble onPress={() => toggleSearchBar(true)}>
                <Icon name='md-search' size={25} color='white' style={searchOption}/>
              </TouchAble>
          }
          <Icon name='md-options' size={25} color='white'/>
        </View>
      </View>
      <Text style={headerText}>{'Restaurants'}</Text>
    </View>
  )
}

Header.propTypes = {
  goto: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
}

export default Header
