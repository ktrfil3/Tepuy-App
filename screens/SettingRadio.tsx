import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import logo from '../assets/images/logoad.png';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { LinearGradient } from 'expo-linear-gradient';


const SettingRadio = () => {
   
    const route = useRoute();
    useEffect( () => {
        console.log(route);
    }, [])
    return (
        <View>
        <Text style={styles.dev}>c</Text>
       </View>
    )

}
export default SettingRadio;

const styles = StyleSheet.create({
    dev: {
      color: '#fff',
      fontWeight: 'bold',
      width: '80%',
      justifyContent: 'center',
      top: 50,
      textAlign: 'center',
      fontSize: 20,
      marginLeft: 40,
    },
    logo: {
        width: 450,
        height: 450,
        justifyContent: 'center',
        left: -30,
        top: -150,
        zIndex: -1,
      
      },
      back: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
});