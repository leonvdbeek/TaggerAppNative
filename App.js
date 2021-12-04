import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity, Icon} from 'react-native';
import { Provider as PaperProvider, FAB, Appbar } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <MapView style={styles.map} showsUserLocation={true}/>
        <TouchableOpacity style={styles.overlay}>
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => console.log('Pressed')}
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
  overlay: {
    position: 'absolute',
    bottom: 50
  },
});