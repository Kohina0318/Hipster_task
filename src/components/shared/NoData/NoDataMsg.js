import React from 'react';
import { View, Text ,Image, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { styles } from '../../../assets/css/NoDataCss/NoDataStyle';
import HalfSizeButton from '../button/halfSizeButton';
import { useNavigation } from '@react-navigation/native';

export default function NoDataMsg(props) {
  const navigation = useNavigation();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  return (
    <View
    style={
    styles.container
    }>
    <Text allowFontScaling={false} style={{ color: themecolor.TXTGREYS, ...styles.txt }}>{props.title}</Text>
  </View>
  );
}
