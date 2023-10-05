import { StyleSheet, Text, View,Button } from "react-native-web";
import React from 'react';
import axios from "axios";

export default function StudentsScreen({ navigation }) {
  axios.get("http://localhost:3002/api/v1/getPersonas").then((res) => { 
    //se cambio el puerto de 3001 a 3002 para que funcione
    console.log(res.data);
  });



  return (
    <View style={styles.container}>
      <Text>Students</Text>
      <Button
        title="Go to HomePage"
        onPress={() => navigation.navigate('HomePage')}
      />
      <Button
        title="Go to Courses"
        onPress={() => navigation.navigate('Courses')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
