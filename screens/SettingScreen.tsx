import React, {useEffect} from 'react';
import { View, Text, FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native';


const SettingScreen = () => {
   
    const route = useRoute();
    useEffect( () => {
        console.log(route);
    }, [])
    
    return (
        <View>
       </View>
    )

}
   

export default SettingScreen;