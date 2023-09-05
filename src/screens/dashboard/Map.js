import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  PermissionsAndroid,
  Text, Alert,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import Header from '../../components/shared/header/Header';
import { styles } from '../../assets/css/DashBoardCss/MapStyle';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import LoadingFullScreen from '../../components/shared/Loader/LoadingFullScreen';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MI from 'react-native-vector-icons/MaterialIcons';

export default function Map(props) {
  const toast = useToast();
  const navigation = useNavigation();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const [loader, setLoader] = useState(false);
  const [showMarker, setShowMarker] = useState(false);
  const [mLat, setMlLat] = useState(28.69591913318175);
  const [mLong, setMLong] = useState(77.2246077023522);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        getLocation()
      } else {
        console.log('Location permission denied');
        navigation.navigate('Dashboard')

      }
    } catch (err) {
      console.warn(err);
      navigation.navigate('Dashboard')
    }
  };

  useEffect(() => {
    requestCameraPermission()
  }, [])

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setShowMarker(!showMarker)
        setMlLat(position.coords.latitude)
        setMLong(position.coords.longitude)
      },
      (error) => {
        console.log(error.code, error.message);
        showAlert('Location Error', 'We are unable to get your location.');

      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'OK',
          onPress: () => {
            // Handle OK button press if needed
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ ...styles.bg, backgroundColor: themecolor.THEMECOLOR }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
      />

      <Header title="Home" />


      {loader ? (
        <LoadingFullScreen style={{ flex: 1 }} />
      ) : (
        <>
          <View style={{ ...styles.bdContainter }} >

            <View style={styles.container}>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                  latitude: mLat,
                  longitude: mLong,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                {showMarker &&
                  <Marker
                    coordinate={{
                      latitude: mLat,
                      longitude: mLong,
                    }}
                    title="Your Location"
                  />
                }
              </MapView>
            </View>

            <View style={styles.floatbtnCon}>
              <TouchableOpacity activeOpacity={0.5} style={{ ...styles.floatButton, backgroundColor:themecolor.BOXBORDERCOLOR }} onPress={() => requestCameraPermission()} >
                <MI name="my-location" size={30} color={"#000"} />
              </TouchableOpacity>
            </View>

          </View>

        </>
      )}
    </View>
  );
}
