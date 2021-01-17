import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const signIn = ({navigation}) => {
return(
    <View style={styles.container}>
        <Text>SignIn Screens</Text>
        <TouchableOpacity onPress={() => Navigation.push()}>
            <Text style={styles.textColor}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("createAccount")}>
            <Text style={styles.textColor}>create Account</Text>
        </TouchableOpacity>
    </View>
);
}

export const createAccount = () => {
    return(
        <View style={styles.container}>
            <Text>CreateAccount Screens</Text>
            <TouchableOpacity onPress={() => navigation.push()}>
                <Text style={styles.textColor}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
      color: '#007aff'
  }
});
