import React from 'react'
import {ScrollView, View, ImageBackground, Text, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import TouchAble from './TouchAble.react'
import Ratings from './Rating.react'
import Divider from './Divider.react'
import restaurantCard from '../../assets/styles/restaurantCard'
import trimText from '../../utils/trimText'

const Details = props => {
  const {image_url, distance, isFav, categories, rating, name, is_closed} = props.data

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{uri: image_url}}
          style={{
            height: 250,
            flexDirection: 'row',
            padding: 20,
            paddingTop: 30,
            justifyContent: 'space-between',
            backgroundColor: 'gray'
          }}>
          <TouchAble onPress={() => props.navigation.goBack()}>
            <Icon name='md-arrow-back' size={25} color='white'/>
          </TouchAble>
          <Icon
            style={{}}
            name={isFav ? 'ios-heart' : 'ios-heart-empty'}
            size={25}
            color='white'
          />
        </ImageBackground>
        <View style={{padding: 20, justifyContent: 'center'}}>
          <View
            style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 20, justifyContent: 'space-between', alignItems: 'center'}}>
            <Image
              source={{uri: image_url}}
              style={{width: 60, height: 60, borderRadius: 60}}
            />
            <View>
              <View style={restaurantCard.captionHeading}>
                <Text style={restaurantCard.main}>{trimText(name)}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ratings rating={rating} />
                <View style={{marginLeft: 10, marginRight: 10, marginTop: 5, width: 5, height: 5, borderRadius: 2, backgroundColor: 'grey'}}/>
                <Text style={{fontSize: 18}}>{
                  categories[0] ? categories[0].title : ''}
                </Text>
              </View>
            </View>
            <Text
              style={{color: 'white',
                height: 30,
                borderRadius: 5,
                padding: 5,
                backgroundColor: 'orange',
                fontSize: 15,
                fontWeight: 'bold'}}>{`${(distance / 1000).toFixed(1)} km`}</Text>
          </View>
          <Divider />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
            <TouchAble>
              <View style={{alignItems: 'center'}}>
                <Icon name='md-call' size={35} color='grey' />
                <Text style={{fontSize: 18}}>{'Call'}</Text>
              </View>
            </TouchAble>
            <TouchAble>
              <View style={{alignItems: 'center'}}>
                <Icon name='md-globe' size={35} color='grey' />
                <Text style={{fontSize: 18}}>{'Website'}</Text>
              </View>
            </TouchAble>
            <TouchAble>
              <View style={{alignItems: 'center'}}>
                <MaterialIcon name='directions' size={35} color='grey' />
                <Text style={{fontSize: 18}}>{'Directions'}</Text>
              </View>
            </TouchAble>
            <TouchAble>
              <View style={{alignItems: 'center'}}>
                <Icon name='md-chatboxes' size={35} color='grey' />
                <Text style={{fontSize: 18}}>{'Invite'}</Text>
              </View>
            </TouchAble>
          </View>
          <Divider />
          <TouchAble>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 20}}>
              <Image />
              <Text style={{fontSize: 18, color: '#414041'}}>{'Book a table with Opentable'}</Text>
              <Icon name='ios-arrow-forward' size={25} color='grey' style={{marginLeft: 'auto'}}/>
            </View>
          </TouchAble>
          <Divider />
          <TouchAble>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignItems: 'center'}}>
              <Image />
              <Text style={{fontSize: 18, color: '#414041'}}>{'Request a ride with Uber'}</Text>
              <Icon name='ios-arrow-forward' size={25} color='grey' style={{marginLeft: 'auto'}}/>
            </View>
          </TouchAble>
          <Divider />
          <TouchAble>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignItems: 'center'}}>
              <MaterialIcon name='clock-outline' size={25} color='grey' style={{marginRight: 15}}/>
              <Text style={{fontSize: 18, color: '#414041'}}>{`${is_closed ? 'Closed' : 'Open Now (07-24h)'}`}</Text>
              <Icon name='ios-arrow-down' size={25} color='grey' style={{marginLeft: 'auto'}}/>
            </View>
          </TouchAble>
          <Divider />
          <TouchAble>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 10, alignItems: 'center'}}>
              <MaterialIcon name='library' size={25} color='grey' style={{marginRight: 15}}/>
              <Text style={{fontSize: 18, color: '#414041'}}>{'Menu'}</Text>
              <MaterialIcon name='link' size={25} color='grey' style={{marginLeft: 'auto'}}/>
            </View>
          </TouchAble>
        </View>
      </ScrollView>
      <TouchAble>
        <View>
          <Divider/>
          <Text style={{alignSelf: 'center', backgroundColor: 'white', padding: 20, color: 'orange', fontSize: 20, fontWeight: 'bold'}}>
            {'VIEW OFFERS'}
          </Text>
        </View>
      </TouchAble>
    </View>
  )
}


export default Details
