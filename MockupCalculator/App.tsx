/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
    return setResult(d as any);
    console.log(result)
    console.log(d)
  }

  // Converts numeric degrees to radians
  function toRad(Value: any) {
    return Value * Math.PI / 180;
  }
  return (
    <View>
      {/* <SafeAreaView style={backgroundStyle}> */}
      <StatusBar
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      // backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
      // contentInsetAdjustmentBehavior="automatic"
      // style={backgroundStyle}
      >
        <Header />
        <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        // style={{
        //   backgroundColor: isDarkMode ? Colors.black : Colors.white,
        // }}
        >


          <TextInput
          placeholder="lat1"
          onChange={(event: any) => setLat1(event.target.value)}
          />
          <TextInput
          placeholder="lat2"
          onChange={(event: any) => setLat2(event.target.value)}

          ></TextInput>
          <TextInput
          placeholder="lon1"
          onChange={(event: any) => setLon1(event.target.value)}

          ></TextInput>
          <TextInput
          placeholder="lon2"
          onChange={(event: any) => setLon2(event.target.value)}
          ></TextInput>
          <Button title="calculate" onPress={() => calcCrow}></Button>
          <Text>{result}</Text>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
