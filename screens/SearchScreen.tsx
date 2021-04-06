import React, {useContext, useEffect, useState} from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import { FontAwesome, Feather, Ionicons} from "@expo/vector-icons";
// import { Text, View } from '../components/Themed';
import {Audio} from 'expo-av';
import {Song} from "../types";
import { Sound } from 'expo-av/build/Audio';
import { isAudioEnabled } from 'expo-av/build/Audio/AudioAvailability';
import blue from '../assets/images/blue.gif';
import logo from '../assets/images/logopage1.png';
import { LinearGradient } from 'expo-linear-gradient';

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://tepuyfm.com/'
  );
}
function facebook() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/Tepuyfm-109789634180594/?'
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
const song = {
  uri: 'http://server6.globalhostla.com:9400/stream',
}
const PlayerWidget = () => {
const[sound,setSound] = useState<sound|null>(null);
const[isPlaying, setIsPlaying] = useState<boolean>(true);

const onPlaybackStatusUpdate = (status: { isPlaying: React.SetStateAction<boolean>;}) => {
  setIsPlaying(status.isPlaying);
}

const playCurrentSong = async () => {
  if (sound) {
    await sound.unloadAsync();
  }

  const { sound: newSound } = await Sound.createAsync(
    {uri: song.uri},
    {shouldPlay: isPlaying},
    onPlaybackStatusUpdate
  )
  setSound(newSound)
}
useEffect(() => {
  playCurrentSong();
}, [])

const onPlayPausePress = async () => {
  if (!sound) {
    return;
  }
  if (isPlaying) {
    await sound.stopAsync();
  } else {
    await sound.playAsync();
  }
}
  return (
    <LinearGradient colors={['#000','#000', '#192f6a']}
    style={styles.back}>
      <View style={styles.container}>
        <View>
          <Image source={blue} style={styles.wave} />
          {/*                                                                                                                                                                                         */}
        </View>
          <Text style={styles.title}>Tepuy Radio</Text>
          <View style={styles.iconsContainer}>
          <TouchableOpacity><Feather name="heart" size={25} color={"white"}/></TouchableOpacity>
          <TouchableOpacity onPress={onPlayPausePress}>
          <FontAwesome name={isPlaying ? 'pause' : 'play'} size={25} color={"white"}/>
          </TouchableOpacity>
          <TouchableOpacity><FontAwesome name="volume-down" size={35} color={"white"} /></TouchableOpacity>    
        </View>
        {/* <View>
          <Text style={styles.envivo}>RADIO EN VIVO</Text>
        </View>  */}
          <View style={styles.Redes}>
          <TouchableOpacity><Ionicons onPress={facebook} name="ios-logo-facebook" size={24} color="#fff" style={{ marginRight: 22}} /></TouchableOpacity>
          <TouchableOpacity><Ionicons onPress={instagram} name="ios-logo-instagram" size={24} color="#fff" style={{ marginRight: 22}} /></TouchableOpacity>
          <TouchableOpacity><Ionicons onPress={twitter} name="ios-logo-twitter" size={24} color="#fff" style={{ marginRight: 22}}  /></TouchableOpacity>
          <TouchableOpacity><Ionicons onPress={youtube} name="ios-logo-youtube" size={24} color="#fff" style={{ marginRight: 22}} /></TouchableOpacity>
          </View>
    </View>
    </LinearGradient>
    
  );
}
export default PlayerWidget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom:  100,
    top: -210,
    zIndex: 9999,
    color: '#fff',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    justifyContent: 'space-around',
    top: -150,
    backgroundColor: '#00000000',
  },
  wave:{
    width: 350,
    height: 350,
    justifyContent: 'center',
    zIndex: 1,
    top: 0,
  },
  envivo:{
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    top: -360,
  },
  logo:{
    width: 550,
    height: 550,
    zIndex: 0,
    top: -100,
    opacity: 0.2,
  },
  Redes: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    justifyContent: 'space-around',
    top: -50,
    backgroundColor: '#00000000',
    left: 10,
  },
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
