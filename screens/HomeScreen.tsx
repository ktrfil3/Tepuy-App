import * as React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
// import Album from '../components/Album'; 
import AlbumCategory from '../components/AlbumCategory';
import albumCategory from '../data/albumCategories'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList data={albumCategory} renderItem={({ item }) => (
          <AlbumCategory title={item.title}albums={item.albums}
          /> 
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
