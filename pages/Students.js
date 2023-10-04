import { StyleSheet, Text, View,Button } from "react-native-web";
import React from 'react';

export default function StudentsScreen({ navigation }) {
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
