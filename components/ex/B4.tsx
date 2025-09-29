import React, { useState, useCallback } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function Ex04() {
  const [employees, setEmployees] = useState([
    { id: "1", name: "Nguyễn Văn A", position: "Developer" },
    { id: "2", name: "Nguyễn Văn B", position: "Tester" },
    { id: "3", name: "Nguyễn Văn C", position: "Designer" },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  // Làm mới dữ liệu (Pull to Refresh)
  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setEmployees([
        { id: "1", name: "Nguyễn Văn A (mới)", position: "Developer" },
        { id: "2", name: "Nguyễn Văn B (mới)", position: "Tester" },
        { id: "3", name: "Nguyễn Văn C (mới)", position: "Designer" },
      ]);
      setRefreshing(false);
    }, 1200);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (loadingMore) return;
    setLoadingMore(true);

    setTimeout(() => {
      const newEmployees = [
        {
          id: (employees.length + 1).toString(),
          name: "Nhân viên " + (employees.length + 1),
          position: "Vị trí",
        },
        {
          id: (employees.length + 2).toString(),
          name: "Nhân viên " + (employees.length + 2),
          position: "Vị trí",
        },
      ];
      setEmployees((prev) => [...prev, ...newEmployees]);
      setLoadingMore(false);
    }, 1500);
  }, [employees, loadingMore]);

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
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator
              size="large"
              color="#007bff"
              style={{ margin: 16 }}
            />
          ) : null
        }
        ListHeaderComponent={
          <Text style={styles.header}>Danh sách nhân viên</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
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
  name: { fontSize: 18, fontWeight: "bold" },
  position: { fontSize: 16, color: "#555" },
});
