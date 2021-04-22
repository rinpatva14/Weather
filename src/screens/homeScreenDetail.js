import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';
import MapView from 'react-native-maps';
import {normalize, widthPercentageToDP} from '../helper/responsiveScreen';

function HomeScreenDetail({route, navigation}) {
  const {
    main,
    descriptionText,
    subBottomView,
    bottomView,
    cityText,
    degreeText,
    imageStyle,
  } = styles;
  const item = route.params.item;

  useLayoutEffect(() => {
    if (Platform.OS === 'android') {
      navigation.setOptions({
        headerTitleStyle: {
          alignSelf: 'center',
          marginRight: 56,
        },
      });
    }
  }, []);
  return (
    <SafeAreaView style={main}>
      <View style={main}>
        <MapView
          style={main}
          region={{
            latitude: item.latitude,
            longitude: item.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0721,
          }}
        />
        <View style={bottomView}>
          <View style={subBottomView}>
            <Text style={cityText}>{item.city}</Text>
            <Text style={descriptionText}>{item.weather}</Text>
            <Text style={descriptionText}>{'Humidity: ' + item.humidity}</Text>
            <Text style={descriptionText}>
              {'Wind Speed: ' + item.windSpeed}
            </Text>
            <Text style={descriptionText}>{'Max. Temp.: ' + item.minTemp}</Text>
            <Text style={descriptionText}>{'Min. Temp.: ' + item.maxTemp}</Text>
          </View>
          <View style={[subBottomView, {alignItems: 'center'}]}>
            <Text style={degreeText}>{item.temp + '° C'}</Text>
            <Image
              source={{uri: item.iconLink}}
              style={imageStyle}
              resizeMode={'contain'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  descriptionText: {
    marginVertical: 8,
    fontSize: normalize(12),
    fontWeight: '400',
    color: '#222',
    fontFamily: 'Roboto-light',
  },
  cityText: {
    marginVertical: 8,
    fontSize: normalize(16),
    fontWeight: '600',
    color: '#111',
    fontFamily: 'Roboto',
  },
  bottomView: {
    flexDirection: 'row',
  },
  subBottomView: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: widthPercentageToDP(50),
  },
  degreeText: {
    fontSize: normalize(20),
    fontWeight: '600',
    color: '#444',
    marginTop: normalize(24),
    fontFamily: 'Roboto-Bold',
  },
  imageStyle: {
    width: normalize(100),
    height: normalize(100),
    marginTop: -20,
  },
});
export default HomeScreenDetail;
