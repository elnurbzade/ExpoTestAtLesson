import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  
    console.log('rendering app component...');
    const [value, setValue]= useState<number>(0);
    return (
      <View style={styles.view}>
        <Text>{value}</Text>
        <Button title="Random" onPress={() => setValue(Math.floor(Math.random()*1000))}>

        </Button>
      </View>
  );
}/* <Text
          style={[
            styles.root,
            { backgroundColor: "blue", height: 80, fontSize: 70 },
          ]}
        >
          Hello Baku
        </Text>
        <Text
          style={[
            styles.root,
            {
              backgroundColor: "red",
              height: 80,
              fontSize: 50,
            },
          ]}
        >
          Hello Azerbaijan
        </Text>
        <Text
          style={{
            ...styles.root,
            backgroundColor: "green",
            height: 80,
            fontSize: 45,
          }}
        >
          Hello React Native
        </Text> */


const styles = StyleSheet.create({
  root: {
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    height:90,
    width:400,
    gap:20,
  
    marginTop: 50,
    backgroundColor:'#d5860e',
    alignItems: 'center',
    justifyContent:'center'
  }
});
