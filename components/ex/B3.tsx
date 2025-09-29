import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, Button } from "react-native";

export default function B3() {
  const [employees, setEmployees] = useState([
    { id: "1", name: "Nguyễn Văn A", position: "Developer" },
    { id: "2", name: "Nguyễn Văn B", position: "Tester" },
    { id: "3", name: "Nguyễn Văn C", position: "Designer" },
  ]);

  const loadMore = () => {
    const newEmployees = [
      {
        id: (employees.length + 1).toString(),
        name: "Nguyễn Văn D",
        position: "PM",
      },
      {
        id: (employees.length + 2).toString(),
        name: "Nguyễn Văn E",
        position: "BA",
      },
    ];
    setEmployees([...employees, ...newEmployees]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.position}>{item.position}</Text>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.header}>Danh sách nhân viên</Text>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            <Button title="Tải thêm" onPress={loadMore} />
          </View>
        }
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
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  item: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: "#e6f0ff",
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  position: {
    fontSize: 16,
    color: "#555",
  },
  footer: {
    marginTop: 16,
    alignItems: "center",
  },
});
