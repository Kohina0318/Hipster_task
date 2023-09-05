import React, { useEffect, useState } from 'react';
import {
  Image,
  StatusBar,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CIcon from 'react-native-vector-icons/Octicons';
import { styles } from '../../../assets/css/HeaderCss/HeaderStyle'
import An from 'react-native-vector-icons/AntDesign';
import MI from 'react-native-vector-icons/MaterialIcons';
import Ep from 'react-native-vector-icons/Entypo';
const { width ,height} = Dimensions.get('screen');

export default function Header(props) {
  const navigation = useNavigation();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  return (
    <View
      style={{
        ...styles.mainView,
        backgroundColor:  themecolor.HEADERTHEMECOLOR,
        borderBottomColor:themecolor.BOXBORDERCOLOR1
      }}>

      <StatusBar
        translucent
        backgroundColor={themecolor.HEADERTHEMECOLOR}
        barStyle={themecolor.STATUSEBARCONTENT}
      />

      <View style={{ ...styles.mainViewContainer }}>
        <View
          style={{ ...styles.headerInnerView }}>

          {props.backIcon ? (
            <>
              <View style={{ ...styles.iconViewCont, }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.toggle}
                  onPress={props.onPressBack}
                >
                  <CIcon
                    name="chevron-left"
                    size={27}
                    color={themecolor.TXTWHITE}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ ...styles.iconTitle2, }}>
                <Text
                  allowFontScaling={false}
                  style={{ ...styles.toolbarTitleHead, color: themecolor.TXTWHITE, }}
                  numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </>
          ) : (
            <>
              <View style={{ ...styles.iconViewCont, }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                  <MI name="notes" size={33} color={themecolor.TXTWHITE} />
                </TouchableOpacity>

              </View>


              <View style={{ ...styles.iconTitle1, }}>
                <Image
                  style={{
                    width: width*0.3,
                    height:height*0.08,
                    resizeMode: 'contain',
                    top:5,

                  }}
                  source={require('../../../assets/images/logoFull.png')}
                />
              </View>

              </>
          )}
        </View>

      </View>
    </View>
  );
}
