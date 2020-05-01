import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const url = 'https://api.github.com/users/' + user;

  const submit = async() =>{
    setLoading(true);
    
    try {
      const response = await axios.get(url);
      navigation.navigate('Detail', {user: response.data});
    } catch (error) {
      alert(error.response.data.message);
    }


    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Insira o nome do usuário:</Text>
      <TextInput  style={styles.input} value={user} onChangeText={setUser}></TextInput>

      <TouchableOpacity style={styles.button}
        disabled={loading}
        onPress={() => {
          submit();
        }}>

        {loading === false && <Text style={styles.textButton}>Buscar</Text>}
        {loading === true && <ActivityIndicator color='white'></ActivityIndicator>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    textAlign: "center",
    height: 40,
    width: 200,
    marginVertical: 20,
    backgroundColor: '#dddddd',
    borderRadius: 10 
  },

  titulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },

  button:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    width: 200 
  },
  textButton:{
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    }
});

export default HomeScreen;
