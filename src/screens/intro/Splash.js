import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StatusBar, View, StyleSheet, Text } from 'react-native';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

export default function Splash(props) {

  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor()

  useEffect(() => {
    async function temp() {
      setTimeout(async () => {
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        });
      }, 3000)
    }
    temp()
  }, [props]);



  return (
    <View
      style={{
        ...styles.MainContainer,
        backgroundColor: themecolor.LOGINTHEMECOLOR,
      }}>


      <StatusBar
        translucent
        backgroundColor={themecolor.LOGINTHEMECOLOR1}
        barStyle={themecolor.STATUSEBARCONTENT}
      />


      <Image
        style={{
          width: width * 0.88,
          resizeMode: 'contain',
          alignSelf: 'center',
          flex: 1,
          zIndex: 9999,
        }}
        source={require('../../assets/images/logoFull.png')}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Fbottom: {
    width: width,
    bottom: 0,
    position: 'absolute',
    flex: 1,
  },
  LogoStyle: {
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  LogoBottom: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignSelf: 'center',
  },

});
