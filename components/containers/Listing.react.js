import React, {Component} from 'react'
import {ActivityIndicator, View} from 'react-native'
import Listing from '../views/Listing.react'
import request from '../../utils/request'
import Header from '../views/Header.react'
import PropTypes from 'prop-types'
import activityIndicator from '../../assets/styles/activityIndicator'

class ListingContainer extends Component {
  constructor() {
    super()

    this.state = {data: [], page: 0, loading: true}
  }

  search = (event) => {
    console.log('-----', event.nativeEvent.text)
    // todo implement search
  }

  getData = async (page = this.state.page) => {
    const nextPage = page + 1
    this.setState({page: nextPage, loading: nextPage > 1 ? false : true})
    try {
      const data = await request(`/search?location=NYC&offset=${nextPage * 20}&term=restaurants`, 'GET', null) //eslint-disable-line
      this.setState({
        data: [...this.state.data, ...data.businesses],
        loading: false
      })
    } catch(err) {
      console.log('-----', err)
    } finally {
      this.setState({loading: false})
    }
  }

  async componentDidMount() {
    this.getData()
  }

  render() {
    const {loading, data, showSearchBar} = this.state
    const {navigate} = this.props.navigation

    return (
      <View>
        <Header search={this.search} showSearchBar={showSearchBar} goto={navigate}/>
        {
          loading ?
            <ActivityIndicator
              animating={loading}
              color='orange'
              size='large'
              style={activityIndicator.main}
            /> :
            <Listing
              data={data} fetchMore={this.getData} goto={navigate}
            />
        }
      </View>
    )
  }
}

ListingContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
}

export default ListingContainer
