import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

export const signIn = ({navigation}) => {
return(
    <View style={styles.container}>
        <Text>SignIn Screens</Text>
        <TouchableOpacity onPress={() => Navigation.push()}>
            <Text style={styles.textColor}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("createAccount")}>
            <Text style={styles.textColor}>create Account</Text>
        </TouchableOpacity>
    </View>
);
}

export const createAccount = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>CreateAccount Screens</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textColor}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

export const Profile = () => {
    return(
        <View style={styles.container}>
            <Text>Profile Screens</Text>
            <TouchableOpacity>
                <Text>Drawer</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

export const Splash = () => {
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
}

export const Home = () => {
    return(
        <View style={styles.container}>
            <Text>Master list Screens</Text>
            <TouchableOpacity
            ><Text style={styles.textColor}>React native by me</Text>   
            </TouchableOpacity>
            <TouchableOpacity
            ><Text style={styles.textColor}>React Native example</Text>   
            </TouchableOpacity>
            <TouchableOpacity
            ><Text style={styles.textColor}>Detail</Text>   
            </TouchableOpacity>
        </View>
    );
}

export const Details = () => {
    return(
        <View style={styles.container}>
            <Text>Details Screens</Text>
        </View>
    );
}

export const Search = () => {
    return(
        <View style={styles.container}>
            <Text>Search Screens</Text>
            <TouchableOpacity>
                <Text>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>React Native Example</Text>
            </TouchableOpacity>
        </View>
    );
}

export const Search2 = () => {
    return(
        <View style={styles.container}>
            <Text>Search Screens</Text>
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
