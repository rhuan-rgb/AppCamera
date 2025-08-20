import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCamera = () =>{
    navigation.navigate("Cam");

  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Abrir câmera" onPress={handleCamera} color="blue"/>
    </View>
  );
};
export default HomeScreen;
