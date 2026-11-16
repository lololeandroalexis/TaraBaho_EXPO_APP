import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SeekerHomeScreen from '../screens/SeekerHomeScreen';
import SeekerSearchScreen from '../screens/SeekerSearchScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import ScreenIndexScreen from '../screens/ScreenIndexScreen';
import { authScreens, employerScreens, seekerScreens } from './routes';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const ported = new Set(['Signup', 'ForgotPassword', 'ResetPassword', 'SeekerHome', 'SeekerSearch']);
  const placeholders = [...authScreens, ...seekerScreens, ...employerScreens].filter((d) => !ported.has(d.name));
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name="Landing" component={LandingScreen as React.ComponentType<any>} />
        <Stack.Screen name="Login" component={LoginScreen as React.ComponentType<any>} />
        <Stack.Screen name="Signup" component={SignupScreen as React.ComponentType<any>} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen as React.ComponentType<any>} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen as React.ComponentType<any>} />
        <Stack.Screen name="SeekerHome" component={SeekerHomeScreen as React.ComponentType<any>} />
        <Stack.Screen name="SeekerSearch" component={SeekerSearchScreen as React.ComponentType<any>} />
        <Stack.Screen name="ScreenIndex" component={ScreenIndexScreen} options={{ headerShown: true, title: 'All screens' }} />
        {placeholders.map((def) => (
          <Stack.Screen key={def.name} name={def.name}>
            {() => <PlaceholderScreen def={def} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
