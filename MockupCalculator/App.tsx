/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  const [lat1, setLat1] = React.useState("")
  const [lat2, setLat2] = React.useState("")
  const [lon1, setLon1] = React.useState("")
  const [lon2, setLon2] = React.useState("")
  const [result, setResult] = React.useState("")

  function calcCrow(lat1: any, lon1: any, lat2: any, lon2: any) {
    var R = 6371; // km
    var dLat: any = toRad(lat2 - lat1);
    var dLon: any = toRad(lon2 - lon1);
    var lat1: any = toRad(lat1);
    var lat2: any = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return setResult(d as any)
    
  }

  // Converts numeric degrees to radians
  function toRad(Value: any) {
    return Value * Math.PI / 180;
  }
  return (
    <View style={styles.pageContainer}>
      <ScrollView style={styles.innerContainer}>
        <View
          style={styles.container}
        >
          <Text style={styles.marginHeader}>Pole 1:</Text>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.inputMargins}
              placeholder="Latitude"
              onChangeText={(value: string) => setLat1(value)}
            />
            <TextInput
              style={styles.inputMargins}
              placeholder="Longitude"
              onChangeText={(value: string) => setLon1(value)}

            ></TextInput>
          </View>
          <Text style={styles.marginHeader}>Pole 2:</Text>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.inputMargins}
              placeholder="Latitude"
              onChangeText={(value: string) => setLat2(value)}

            ></TextInput>
            <TextInput
              style={styles.inputMargins}

              placeholder="Longitude"
              onChangeText={(value: string) => setLon2(value)}
            ></TextInput>
          </View>
          <View style={styles.button}>
            <Button color='black' title="calculate" onPress={() => calcCrow(lat1, lon1, lat2, lon2)}></Button>
          </View>
          <View style={styles.resultsContainer}>
            <Text>Length: </Text>
            <Text>{result}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    borderWidth: 1,
    flex: 1,
    borderColor: 'black',
    borderRadius: 50,
    borderStyle: 'solid'
  },
  innerContainer: {
    paddingTop: 50,
    margin: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    borderStyle: 'solid'
  },
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'space-between',
    textAlign: 'left'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  button: {
    marginVertical: 50,
    paddingVertical: 5,
    paddingHorizontal: 60,
    // color: '#000',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    borderStyle: 'solid'
  },
  marginHeader: {
    margin: 20,
  },
  inputMargins: {
    marginBottom: 10,
    paddingRight: 20,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'space-between'
  }
});

export default App;
