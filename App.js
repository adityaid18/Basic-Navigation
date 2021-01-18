import React from 'react';
import {createStackNavigator} from '@react-navigation/stack' ;
import {NavigationContainer} from '@react-navigation/native' ;
import {createDrawerNavigator} from '@react-navigation/drawer' ;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs' ;

import {signIn, 
        createAccount,
        Home,
        Profile,
        Splash,
        Search,
        Search2,
        Details
    } from './screens/homeScreens' ;

const AuthStack = createStackNavigator();




export default() => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(()=>{
    setTimeout(()=>{
      setIsLoading();
    },1000);
  }, []);

  if (isLoading){
      return <Splash />
  }

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

