import { View,Text, StyleSheet } from "react-native";
import React from "react";

const TranslateApp = () => {
  return (
    <View style={styles.container}>
      <Text>Translate App</Text>
    </View>
  );
}   

export default TranslateApp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  