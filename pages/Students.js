import { StyleSheet, Text, View,Button } from "react-native-web";

export default function Students({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Loren impsum HomePage</Text>
      <Button
        title="HomePageButtom"
        onPress={() =>
          navigation.navigate('HomePage')
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