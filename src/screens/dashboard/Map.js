import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import Header from '../../components/shared/header/Header';
import { styles } from '../../assets/css/DashBoardCss/MapStyle';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import LoadingFullScreen from '../../components/shared/Loader/LoadingFullScreen';

export default function Map(props) {
  const toast = useToast();
  const navigation = useNavigation();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const [loader, setLoader] = useState(false);
  
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ ...styles.bdContainter }} >
<Text>  map</Text>
            </View>
            <View style={{ marginVertical: 5 }} />
          </ScrollView>
        </>
      )}
    </View>
  );
}
