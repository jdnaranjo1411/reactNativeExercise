import { StyleSheet,Text,View } from "react-native-web";

export function Students(){
    return(
        <View style={styles.container}>
            <Text>Loren impsum Students</Text>
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