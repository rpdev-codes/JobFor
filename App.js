import React from "react";
import { SafeAreaView, Button, StatusBar, View } from "react-native";
import Cbutton from "./components/Cbutton";

export default function App() {
  return (
    <>
    <StatusBar/>
    <SafeAreaView>
      <View>
      <Button onPress={console.log('you pressed me')} title="Click UP"></Button>
      </View>
      <Cbutton/>
    </SafeAreaView>
    </>
  );
}
