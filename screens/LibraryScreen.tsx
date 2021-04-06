import React, {useState} from 'react';
import { FlatList,SafeAreaView,StatusBar,StyleSheet,Text,TouchableOpacity, } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import EditScreenInfo from '../components/EditScreenInfo';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'Programas',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'Episodios',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'Descargas',
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableNativeFeedback onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableNativeFeedback>
);

export default function TabTwoScreen() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#3F50FC' : '#1E2999';

    return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 60,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    height: 200,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 5,
  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  artist: {
    color: 'lightgray',
    fontSize: 15,
  }
});