import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import axios from "axios";

export default function Courses({ navigation }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/v1/getCursos")
      .then((res) => {
        console.log(res.data.data)
        setCourses(res.data.data);
      })
      .catch((error) => {
        console.log("Error al obtener los cursos:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Lista de cursos</Text>
      {courses.length>0?  (<FlatList
        data={courses}
        keyExtractor={(item) => item.cod}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Text>Codigo del curso:</Text>
            <Text style={styles.courseName}>{item.cod}</Text>
            <Text>Nombre del curso:</Text>
            <Text style={styles.courseDescription}>{item.nombre}</Text>
          </View>
        )}
      />):''}
      <Button
        title="Ir a la página de inicio"
        onPress={() => navigation.navigate("HomePage")}
      />
      <Button
        title="Ir a la página de estudiantes"
        onPress={() => navigation.navigate("Students")}
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
  courseItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  courseDescription: {
    fontSize: 14,
  },
});
