import React, {Component} from 'react'
import {ActivityIndicator, View} from 'react-native'
import Listing from '../views/Listing.react'
import request from '../../utils/request'
import Header from '../views/Header.react'

export default class ListingContainer extends Component {
  constructor() {
    super()

    this.state = {data: [], page: 0, loading: true}
    this.getData = this.getData.bind(this)
  }

  getData(page = this.state.page) {
    const nextPage = page + 1
    this.setState({page: nextPage, loading: nextPage > 1 ? false : true})
    request(`/search?location=NYC?limit=5&offset=${nextPage * 20}&term=restaurants`, 'GET', null)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: [...data.businesses, ...this.state.data],
          loading: false
        })
      })
      .catch(err => {
        this.setState({loading: false})
      })
  }

  async componentDidMount() {
    this.getData()
  }

  render() {
    const {loading, data} = this.state

    return (
      <View>
        <Header />
        {loading && <ActivityIndicator animating={loading} color='blue' size='large' />}
        {!loading &&
        <Listing
          data={data} fetchMore={this.getData} goto={this.props.navigation.navigate}
        />}
      </View>
    )
  }
}

