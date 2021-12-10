import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { IconButton } from '../components';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { FAB, Provider as PaperProvider} from 'react-native-paper';
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function HomeScreen() {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const tags = [
    {
      "_id": "5e3a929c4c458f6a0000114b",
      "lat": 20.6259981,
      "lng": 96.5522659,
      "name": "ws",
      "img": "5e3a929a4c458f6a0000114a",
      "description": ""
    },
    {
      "_id": "5e3a8b384c458f6a00000f18",
      "lat": 20.6260168,
      "lng": 96.55225620000002,
      "name": "iphonetagg",
      "description": "jnefijneifjneij",
      "img": "5e3a8b334c458f6a00000f17"
    },
    {
      "_id": "5e850014e332cd26000347d5",
      "lat": 52.04869120000001,
      "lng": 5.65248,
      "name": "Thuis",
      "img": "5e850013e332cd26000347d4",
      "description": ""
    },
    {
      "_id": "5e3a97a54c458f6a00001174",
      "lat": 20.6260172,
      "lng": 96.5522536,
      "name": "Test",
      "description": "sa",
      "img": "5e3a97a14c458f6a00001173"
    },
    {
      "_id": "5e3a96f74c458f6a0000116d",
      "lat": 20.6260172,
      "lng": 96.5522536,
      "name": "Testtag",
      "description": "asd",
      "img": "5e3a96f54c458f6a0000116c"
    },
    {
      "_id": "5e3a96f74c458f6a0000116d",
      "lat": 51.4403482,
      "lng": 5.480985,
      "name": "Centrum",
      "description": "asd",
      "img": "5e3a96f54c458f6a0000116c"
    },
  ]

  return (
    <PaperProvider>
      <View style={styles.container}>
        <MapView style={styles.map} 
        showsUserLocation={true}>
          {tags.map(tag => (
            <Marker
              key={tag._id}
              title={tag.name}
              coordinate={{ latitude : tag.lat , longitude : tag.lng }}
            />
          ))}
        </MapView>
        <View style={styles.overlayTop}>
          <Text style={styles.title}>Welcome {user.email}!</Text>
          <Text style={styles.text}>Your UID is: {user.uid} </Text>
        </View>
        <TouchableOpacity style={styles.overlayBottom}>
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => console.log('Pressed')}
          />
          <FAB
            style={styles.fab}
            icon="logout"
            onPress={handleSignOut}
          />
        </TouchableOpacity>
        </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  overlayTop: {
    position: 'absolute',
    top: 50
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  }
});
