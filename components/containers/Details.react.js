import React, {Component} from 'react'
import {Text} from 'react-native'
import Details from '../views/Details.react'
// import Details from '../views/Details.react'

class DetailsContainer extends Component {

  render() {
    const {navigation} = this.props
    const item = navigation.getParam('item', {})

    console.log('------', item)

    return (
      <Details data={item} navigation={navigation} />
    )
  }
}

export default DetailsContainer
