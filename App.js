import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity, Icon} from 'react-native';
import { Provider as PaperProvider, FAB, Appbar } from 'react-native-paper';
import Mapviewwithbutton from './components/Mapviewwithbutton'

export default function App() {
  return (
    <PaperProvider>
      <Mapviewwithbutton />
    </PaperProvider>
  );
};