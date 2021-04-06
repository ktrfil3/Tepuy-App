import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import logo from '../assets/images/logoad.png';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { LinearGradient } from 'expo-linear-gradient';


const UserScreen = () => {
   
    const route = useRoute();
    useEffect( () => {
        console.log(route);
    }, [])

      function facebook() {
        WebBrowser.openBrowserAsync(
          'https://www.facebook.com/mivesub/'
        );
      }function instagram() {
        WebBrowser.openBrowserAsync(
          'https://www.instagram.com/tepuyfm/'
        );
      }function twitter() {
        WebBrowser.openBrowserAsync(
          'https://twitter.com/tepuyfm'
        );
      }
      function youtube() {
        WebBrowser.openBrowserAsync(
          'https://www.youtube.com/channel/UCUN1CKzvIBKh_gUwweFOPEw?view_as=subscriber'
        );
      }

    return (
        <View>
        <LinearGradient colors={['transparent', 'transparent','#000', '#000']}
         style={styles.back}>
        <Image source={logo} style={styles.logo} />
        </LinearGradient>
        
        <Text style={styles.dev}>Desarrollado por la Misión Venezolana del Sur de Bolívar
        en conjunto con el deparatamento de comunicaciones</Text>
        <View style={styles.Redes}>
          <TouchableOpacity><Ionicons onPress={facebook} name="ios-logo-facebook" size={24} color="#fff" style={{ marginRight: 22}} /></TouchableOpacity>
          <TouchableOpacity><Ionicons onPress={instagram} name="ios-logo-instagram" size={24} color="#fff" style={{ marginRight: 22}} /></TouchableOpacity>
          <TouchableOpacity><Ionicons onPress={twitter} name="ios-logo-twitter" size={24} color="#fff" style={{ marginRight: 22}}  /></TouchableOpacity>
          <TouchableOpacity><Ionicons onPress={youtube} name="ios-logo-youtube" size={24} color="#fff" style={{ marginRight: 22}} /></TouchableOpacity>
          </View>
       </View>
       
    )

}
   

export default UserScreen;

const styles = StyleSheet.create({
    dev: {
      color: '#fff',
      fontWeight: 'bold',
      width: '80%',
      justifyContent: 'center',
      top: -100,
      textAlign: 'center',
      fontSize: 20,
      marginLeft: 40,
    },
    logo: {
        width: 450,
        height: 450,
        justifyContent: 'center',
        left: -30,
        top: -130,
        zIndex: -1,
      
      },
      Redes: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
        justifyContent: 'space-around',
        top: -20,
        backgroundColor: '#00000000',
        left: 80,
      },
      back: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
});