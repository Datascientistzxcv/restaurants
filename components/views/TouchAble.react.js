import React from 'react'
import {TouchableHighlight} from 'react-native'
import PropTypes from 'prop-types'

const TouchAble = props => {
  const {style, onPress, underlayColor, children} = props
  return (
    <TouchableHighlight
      style={style || {}}
      onPress={onPress}
      underlayColor={underlayColor || 'rgb(247, 250, 255, 0.4)'}>
      {children}
    </TouchableHighlight>
  )
}

TouchAble.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  underlayColor: PropTypes.string,
  style: PropTypes.shape({})
}

export default TouchAble
