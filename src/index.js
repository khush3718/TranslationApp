import { View,Text, StyleSheet , TextInput, TouchableOpacity , Keyboard } from "react-native";
import { useState } from "react"; // to maintain the state of the app
import axios from "axios";    // to make http requests
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

const TranslateApp = () => {


    const [inputText, setInputText] = useState("");  // to maintain the state of the input text
    const [TranslatedText, setTranslatedText] = useState("");  // to maintain the state of the translated text
    const [FromLanguage, setFromLanguage] = useState("en");  // to maintain the state of the from language
    const [ToLanguage, setToLanguage] = useState("hi");  // to maintain the state of the to language
    const [openFrom, setOpenFrom] = useState(false);  // to maintain the state of the dropdown
    const [openTo, setOpenTo] = useState(false);  // to maintain the state of the dropdown

    const API_KEY = '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'


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
  