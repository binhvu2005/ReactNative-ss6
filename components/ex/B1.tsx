import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

export default function B1() {
  const employees = [
    { id: "1", name: "Nguyễn Văn A", position: "Developer" },
    { id: "2", name: "Nguyễn Văn B", position: "Tester" },
    { id: "3", name: "Nguyễn Văn C", position: "Designer" },
    { id: "4", name: "Nguyễn Văn D", position: "Project Manager" },
    { id: "5", name: "Nguyễn Văn E", position: "Business Analyst" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách nhân viên</Text>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.position}>{item.position}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    padding: 20,
    marginBottom: 16,
    backgroundColor: "#e6f0ff",
    borderRadius: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  position: {
    fontSize: 15,
    color: "#555",
    marginTop: 4,
  },
});
