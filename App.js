import React from 'react';
import {createStackNavigator} from '@react-navigation/stack' ;
import {NavigationContainer} from '@react-navigation/native' ;


import { signIn, createAccount} from './screens/homeScreens' ;

const AuthStack = createStackNavigator();

export default() => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen 
          name="signIn" component={signIn} options={{title : 'Sign In'}}/>
        <AuthStack.Screen 
          name="createAccount" component={createAccount} options={{title : ' create account'}}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

