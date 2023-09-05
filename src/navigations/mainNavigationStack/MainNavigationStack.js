import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '../../navigations/NavigationDrw/NavigationService';
import { isDarkMode } from '../../components/Theme/ThemeDarkLightColor';
import Header from '../../components/shared/header/Header';
import Splash from '../../screens/intro/Splash';
import DrawerNavigation from '../drawer/DrawerNavigation';
import Map from '../../screens/dashboard/Map';


function MainNavigationStack(props) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer
      theme={isDarkMode ? DarkTheme : DefaultTheme}
      ref={navigationRef}>
      <Stack.Navigator headerShown={false}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Header"
          component={Header}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigationStack;
