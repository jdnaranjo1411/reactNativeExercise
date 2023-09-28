import { StyleSheet,Text,View } from "react-native-web";

export function Courses({navigation}){
    return(
        <View style={styles.container}>
            <Text>Loren impsum Courses</Text>
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