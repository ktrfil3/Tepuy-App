import React, {useContext} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import {Song} from "../../types";



export type SongListItemProps = {
  song: Song
}

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;

  return (
    <TouchableOpacity >
    <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>  
    </View>
    <View>
        <TouchableOpacity style={styles.dots} >
         <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
    </View>  
    </TouchableOpacity>
    
  )
}

export default SongListItem;
