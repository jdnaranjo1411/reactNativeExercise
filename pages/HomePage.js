import { StyleSheet, Text, View, Button } from "react-native-web";

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Loren impsum HomePage</Text>
      <Button
        title="CoursesButtom"
        onPress={() =>
          navigation.navigate('Courses')
        }
      />
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