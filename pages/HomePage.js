import { StyleSheet, Text, View, Button } from "react-native-web";

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Button
        title="Courses_Buttom"
        onPress={() =>
          navigation.navigate('Courses')
        }
        />

        <Button
        title="Students_Buttom"
        onPress={() =>
          navigation.navigate('Students')
        }/>
    </View>
  )

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});