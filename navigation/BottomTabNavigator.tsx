import { Ionicons, MaterialCommunityIcons, FontAwesome5, Feather} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';

import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/SearchScreen';
import TabThreeScreen from '../screens/LibraryScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import AlbumScreen from '../screens/AlbumScreen';
import SettingScreen from '../screens/SettingScreen';
import SettingRadio from '../screens/SettingRadio';
import UserScreen from '../screens/UserScreen';
import { Button, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{title:'',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-variant" size={35} style={{ marginBottom: -8 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{title:'',
          tabBarIcon: ({ color }) => <Ionicons name="radio-outline" size={35} style={{ marginBottom: -8 }} color={color}/>,
        }}
      />
       <BottomTab.Screen
        name="Library"
        component={TabThreeNavigator}
        options={{title:'',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="library"  size={35} style={{ marginBottom: -8 }} color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator({navigation}) {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: () => <Text style={styles.title}>Tepuy Radio</Text>,
          headerRight: () => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}  style={styles.setting}><Ionicons name="ios-settings-outline" size={24} color="white"/></TouchableOpacity>
          </View>
          ),
        }}
      />

      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: () => (
          <Text style={styles.title}>Album</Text>
            ) }}
      />

      <TabOneStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ headerTitle: () => (
          <Text style={styles.title3}>Configuración</Text>
            ) }}
      />
    </TabOneStack.Navigator>
    
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator({navigation}) {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: () => <Text style={styles.title}>Radio</Text>,
        headerRight: () => (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('SettingRadio')}  style={styles.setting}><Ionicons name="ios-settings-outline" size={24} color="white"/></TouchableOpacity>
        </View>
        ),
      }}
    />
       <TabOneStack.Screen 
        name="SettingRadio"
        component={SettingRadio}
        options={{ headerTitle: () => (
          <Text style={styles.title3}>Configuración</Text>
            ) }}
      />
    </TabTwoStack.Navigator>
  );
}


const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator({navigation}) {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{
          headerTitle: () => <Text style={styles.title}>Podcast</Text>,
          headerRight: () => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('UserScreen')}  style={styles.setting} ><MaterialCommunityIcons name="face-profile" size={28} color="white" /></TouchableOpacity>
          </View>
          ),
        }}
      />

      <TabOneStack.Screen 
        name="UserScreen"
        component={UserScreen}
        options={{ headerTitle: () => (
          <Text style={styles.title2}>Desarrollador</Text>
            ) }}
      />
    </TabThreeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  setting: {
    marginRight: 15,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  title2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
    marginLeft: 15,
  },
  title3: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
    marginLeft: 15,
  },
});
