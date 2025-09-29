import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, Button } from "react-native";

export default function B2() {
  const [employees, setEmployees] = useState<any[]>([]);

  const addEmployee = () => {
    const newEmployee = {
      id: (employees.length + 1).toString(),
      name: "Nhân viên " + (employees.length + 1),
      position: "Vị trí " + (employees.length + 1),
    };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <View style={styles.container}>
      <Button title="Thêm nhân viên" onPress={addEmployee} />

      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.position}>{item.position}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Không có dữ liệu</Text>
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
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#e6f0ff",
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  position: {
    fontSize: 14,
    color: "#555",
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "gray",
  },
});
