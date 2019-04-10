import React from 'react'
import {ScrollView, View, ImageBackground, Text, Image, Linking, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import TouchAble from './TouchAble.react'
import Ratings from './Rating.react'
import Divider from './Divider.react'
import restaurantCard from '../../assets/styles/restaurantCard'
import trimText from '../../utils/trimText'
import details, {flexCenter, centerAlign} from '../../assets/styles/details'
import {marginLeftAuto} from '../../assets/styles/shared'

const openLink = url => {
  if (url) {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported)
          console.error("Can't handle url: " + url)
        else
          return Linking.openURL(url)
      })
      .catch((err) => console.error('An error occurred', err))
  }
}

const Details = props => {
  const {
    image_url, distance, isFav, categories, rating, name, is_closed, phone, url, coordinates
  } = props.data
  const {latitude = 0, longitude = 0} = coordinates

  return (
    <View style={details.container}>
      <ScrollView
        style={details.container}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{uri: image_url}}
          style={details.banner}>
          <TouchAble onPress={() => props.navigation.goBack()}>
            <Icon name='md-arrow-back' size={25} color='white'/>
          </TouchAble>
          <Icon
            name={isFav ? 'ios-heart' : 'ios-heart-empty'}
            size={25}
            color='white'
          />
        </ImageBackground>
        <View style={details.actionsRow}>
          <View
            style={details.firstRow}>
            <Image
              source={{uri: image_url}}
              style={details.imageCircle}
            />
            <View>
              <View style={restaurantCard.captionHeading}>
                <Text style={restaurantCard.main}>{trimText(name)}</Text>
              </View>
              <View style={flexCenter}>
                <Ratings rating={rating} />
                <View style={details.dot}/>
                <Text style={details.baseFont}>{
                  categories[0] ? categories[0].title : ''}
                </Text>
              </View>
            </View>
            <Text style={details.distance}>
              {`${(distance / 1000).toFixed(1)} km`}
            </Text>
          </View>
          <Divider />
          <View style={details.secondRow}>
            <TouchAble onPress={() => openLink(`tel:${phone}`)}>
              <View style={centerAlign}>
                <Icon name='md-call' size={35} color='grey' />
                <Text style={details.baseFont}>{'Call'}</Text>
              </View>
            </TouchAble>
            <TouchAble onPress={() => openLink(url)}>
              <View style={centerAlign}>
                <Icon name='md-globe' size={35} color='grey' />
                <Text style={details.baseFont}>{'Website'}</Text>
              </View>
            </TouchAble>
            <TouchAble
              onPress={
                () => openLink(
                  `${Platform.OS === 'ios' ?
                    `http://maps.apple.com/?ll=${latitude},${longitude}` :
                    `geo:${latitude},${longitude}`}`
                )
              }>
              <View style={centerAlign}>
                <MaterialIcon name='directions' size={35} color='grey' />
                <Text style={details.baseFont}>{'Directions'}</Text>
              </View>
            </TouchAble>
            <TouchAble onPress={() => console.warn('Not implemented')}>
              <View style={centerAlign}>
                <Icon name='md-chatboxes' size={35} color='grey' />
                <Text style={details.baseFont}>{'Invite'}</Text>
              </View>
            </TouchAble>
          </View>
          <Divider />
          <TouchAble onPress={() => console.warn('Not implemented')}>
            <View style={details.listItem}>
              <Image
                source={require('../../assets/images/opentable.jpg')}
                style={details.listItemImage}
              />
              <Text style={details.listItemText}>{'Book a table with Opentable'}</Text>
              <Icon name='ios-arrow-forward' size={25} color='grey' style={marginLeftAuto}/>
            </View>
          </TouchAble>
          <Divider />
          <TouchAble onPress={() => console.warn('Not implemented')}>
            <View style={details.listItem}>
              <Image
                source={require('../../assets/images/uber.png')}
                style={details.listItemImage}
              />
              <Text style={details.listItemText}>{'Request a ride with Uber'}</Text>
              <Icon name='ios-arrow-forward' size={25} color='grey' style={marginLeftAuto}/>
            </View>
          </TouchAble>
          <Divider />
          <TouchAble onPress={() => console.warn('Not implemented')}>
            <View style={details.listItem}>
              <MaterialIcon
                name='clock-outline'
                size={25} color='grey'
                style={details.listItemImage}
              />
              <Text style={details.listItemText}>
                {`${is_closed ? 'Closed' : 'Open Now (07-24h)'}`}
              </Text>
              <Icon name='ios-arrow-down' size={25} color='grey' style={marginLeftAuto}/>
            </View>
          </TouchAble>
          <Divider />
          <TouchAble onPress={() => console.warn('Not implemented')}>
            <View style={{...details.listItem, paddingBottom: 10}}>
              <MaterialIcon name='library' size={25} color='grey' style={details.listItemImage}/>
              <Text style={details.listItemText}>{'Menu'}</Text>
              <MaterialIcon name='link' size={25} color='grey' style={marginLeftAuto}/>
            </View>
          </TouchAble>
        </View>
      </ScrollView>
      <View>
        <Divider/>
        <TouchAble onPress={() => console.warn('Not implemented')}>
          <Text style={details.footerText}>
            {'VIEW OFFERS'}
          </Text>
        </TouchAble>
      </View>
    </View>
  )
}

Details.propTypes = {
  data: PropTypes.shape({})
}


export default Details
