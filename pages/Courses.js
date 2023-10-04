import { StyleSheet,Text,View } from "react-native-web";
import React from 'react';
import { Button } from 'react-native';


export default function Courses({navigation}){
    return(
        <View style={styles.container}>
            <Text></Text>
            <Button
        title="HomePage_Buttom"
        onPress={() =>
          navigation.navigate('HomePage')
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