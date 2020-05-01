import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function DetailScreen({ navigation, route }) {
  const { user } = route.params;
  const { name, bio, avatar_url } = user;

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Image style={styles.avatar} source={{ uri: avatar_url }}></Image>

  <Text style={styles.texto}>{name}</Text>
  <Text>{bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: "blue",
  },
});

export default DetailScreen;
