import React from 'react'
import {View} from 'react-native'
import PropTypes from 'prop-types'

const Divider = props => {
  const {color} = props
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: 1
      }}
    />
  )
}

Divider.propTypes = {
  color: PropTypes.string
}

Divider.defaultProps = {
  color: '#e9ecef'
}

export default Divider
