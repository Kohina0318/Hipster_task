import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
  Image,
  StatusBar, ImageBackground
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { MainNavigatorstyle } from '../../assets/css/MainNavigatorstyle';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerActions, useNavigation, useFocusEffect } from '@react-navigation/native';
import { navigate } from '../NavigationDrw/NavigationService';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import II from 'react-native-vector-icons/Ionicons';
import FA from 'react-native-vector-icons/FontAwesome5';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { useToast } from 'react-native-toast-notifications';

const { width } = Dimensions.get('window');

export default function DrawerContent(props) {
  const toast = useToast();
  const navigation = useNavigation();

  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();


  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...MainNavigatorstyle.DrawerContentSView,
        backgroundColor: themecolor.THEMECOLOR1,
        borderColor: themecolor.BOXBORDERCOLOR1,
      }}>
      <StatusBar
        translucent
        backgroundColor={themecolor.HEADERTHEMECOLOR}
        barStyle={themecolor.STATUSEBARCONTENT}
      />
      <View style={MainNavigatorstyle.userinfo1}>

        <ImageBackground source={require("../../assets/images/bgimg.png")} resizeMode='stretch' imageStyle={{ opacity: 0.8, backgroundColor: "#81ecec" }}
          style={{ ...MainNavigatorstyle.profilecontainer }}>
          <View style={{ width: "75%", }}>
            <View style={{ ...MainNavigatorstyle.imgCon,}}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                }}
                source={require('../../assets/images/profile.png')}
              />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss1,
                color: themecolor.TXTWHITE1, left: 10
              }}>Kohina Tiwari</Text>
            <View style={{ ...MainNavigatorstyle.textSpace }} />
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecssnew,
                color: themecolor.TXTWHITE1,
              }}>KKGWAL0038000</Text>
            <View style={{ ...MainNavigatorstyle.textSpace }} />
            <View style={{ ...MainNavigatorstyle.levelCon, backgroundColor: themecolor.CONTENTHEADEROPACITY, }}>
              <View style={{ ...MainNavigatorstyle.levelinnercon }}>
              </View>
            </View>
            <View style={{ ...MainNavigatorstyle.textSpace }} />
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.signintextnew,
                color: themecolor.TXTWHITE1, left: 10
              }}>Available</Text>
          </View>
          <TouchableOpacity style={{ ...MainNavigatorstyle.settingBtn }}>
            <II name="settings" color={themecolor.BACKICON} size={30} />
          </TouchableOpacity>

        </ImageBackground>

        <View style={{ marginTop: 10 }} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 40 }}>
              <FA name="users" size={25} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Users
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <View style={{ width: 40 }}>
              <MCI name="google-maps" size={25} color={themecolor.BACKICON} />
            </View>
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.BACKICON,
              }}>
              Map
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={{ marginVertical: 7 }} />

        <View style={MainNavigatorstyle.view2}>
          <View
            style={{
              ...MainNavigatorstyle.Borderline,
              borderWidth: 1,
              borderColor: themecolor.BOXBORDERCOLOR1,
            }}
          />
          <View style={{ marginVertical: 3 }} />
          <Text allowFontScaling={false} style={{ ...MainNavigatorstyle.view2txt }}>App Version 1.0</Text>
          <View style={{ marginVertical: 3 }} />
        </View>

      </View>
    </DrawerContentScrollView>
  );
}
