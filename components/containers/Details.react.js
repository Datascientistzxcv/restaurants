import React, {Component} from 'react'
import Details from '../views/Details.react'

class DetailsContainer extends Component {

  render() {
    const {navigation} = this.props
    const item = navigation.getParam('item')

    return (
      <Details data={item} navigation={navigation} />
    )
  }
}

DetailsContainer.propTypes = {

}

export default DetailsContainer
