import { StyleSheet, Text, View, Button, FlatList } from "react-native-web";
import React,{useEffect,useState} from "react";
import axios from "axios";

export default function StudentsScreen({ navigation }) {
  const [students, setStudends] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3002/api/v1/getPersonas")
      .then((res) => {
        console.log(res.data.data);
        setStudends(res.data.data);
      })
      .catch((error) => {
        console.log("Error al obtener los estudiantes:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Lista de Estudiantes</Text>
      
     {students.length>0? (<FlatList
        data={students}
        renderItem={({ item }) => (
          <View>
            <Text>Nombre</Text>
            <Text>{item.nombre}</Text>
            <Text>Edad</Text>
            <Text>{item.edad}</Text>
            <Text>Curso</Text>
            <Text>{item.curso}</Text>
          </View>
        )}
      />):''}
      <Button
        title="Go to HomePage"
        onPress={() => navigation.navigate("HomePage")}
      />
      <Button
        title="Go to Courses"
        onPress={() => navigation.navigate("Courses")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
