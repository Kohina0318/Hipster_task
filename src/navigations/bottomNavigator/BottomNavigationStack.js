import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Colors } from '../../assets/config/Colors';
import { FontFamily } from '../../assets/fonts/FontFamily';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import { MainNavigatorstyle } from '../../assets/css/MainNavigatorstyle';
import Dashboard from '../../screens/dashboard/Dashboard';
import FA from 'react-native-vector-icons/FontAwesome5';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Map from '../../screens/dashboard/Map';

const Tab = createBottomTabNavigator();
const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

export default function BottomNavigationStack(props) {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 55,
          backgroundColor: themecolor.LOGINTHEMECOLOR1,
          borderColor: themecolor.BOXBORDERCOLOR,
          keyboardHidesTabBar: true,
          labelStyle: MainNavigatorstyle.tab1,
          style: MainNavigatorstyle.tab2,
          animationEnabled: true,
          inactiveTintColor: Colors.gray,
          activeTintColor: themecolor.HEADERTHEMECOLOR,
          showLabel: false,
          fontFamily: FontFamily.PopinsMedium,
          headerShown: false,

        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          MyTransition,
          tabBarLabel: '',
          tabBarLabelStyle: { top: -4, },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <>
                <FA name="users" color={themecolor.BACKICON} size={24} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.BACKICON,
                  }}>
                  Users
                </Text>
              </>
            ) : (
              <>
                <FA name="users" size={24} color={themecolor.TXTGREY} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.TXTGREY,
                  }}>
                  Users
                </Text>
              </>
            ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          MyTransition,
          tabBarLabel: ' ',
          tabBarLabelStyle: { bottom: -5 },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <>
                <MCI name="google-maps" color={themecolor.BACKICON} size={25} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.BACKICON,
                  }}>
                  Map
                </Text>
              </>
            ) : (
              <>
                <MCI name="google-maps" size={25} color={themecolor.TXTGREY} />
                <Text
                  allowFontScaling={false}
                  style={{
                    ...MainNavigatorstyle.abelstylecss2,
                    color: themecolor.TXTGREY,
                  }}>
                  Map
                </Text>
              </>
            ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
