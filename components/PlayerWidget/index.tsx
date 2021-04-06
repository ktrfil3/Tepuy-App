import React, {useContext, useEffect, useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome, Feather} from "@expo/vector-icons";
import {Audio} from 'expo-av';
import {Song} from "../../types";
import styles from './styles';
import { Sound } from 'expo-av/build/Audio';


const song = {
    id: '1',
    uri: 'https://firebasestorage.googleapis.com/v0/b/tepuy-radio.appspot.com/o/08%20Worthy%20The%20Lamb.mp3?alt=media&token=e0655f6f-3f7d-47ae-8993-9884dd97976a',
    imageUri: 'https://files.adventistas.org/7cast/sites/2/2020/06/tempo-de-refletir-350x350.png',
    title: 'Tempo de refleter',
    artist: 'Greg',
} 
const PlayerWidget = () => {
  const[sound,setSound] = useState<sound|null>(null);
  const[isPlaying, setIsPlaying] = useState<boolean>(true);
  const[duration, setDuration] = useState<number|null>(null);
  const[position, setPosition] = useState<number|null>(null);
  
  const onPlaybackStatusUpdate = (status: { isPlaying: React.SetStateAction<boolean>; durationMillis: React.SetStateAction<number | null>; positionMillis: React.SetStateAction<number | null>; }) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
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

  const getProgress = () => {
    if ( sound === null || duration === null || position === null){
      return 0;
    }
    return (position/duration) * 100;
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        
        <View style={styles.iconsContainer}>
          <TouchableOpacity><Feather name="heart" size={20} color={"white"}/></TouchableOpacity> 
          <TouchableOpacity onPress={onPlayPausePress}>
          <FontAwesome name={isPlaying ? 'pause' : 'play'} size={20} color={"white"}/>
          </TouchableOpacity>
        </View>
        </View>
      </View>
      <View style={[styles.progress, { width: `${getProgress()}%` }]}/>
    </View>
  )
}

export default PlayerWidget;
