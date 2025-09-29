import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function Ex05() {
  const products = [
    {
      title: "Điện thoại",
      data: ["iPhone 15", "Samsung Galaxy S24", "Xiaomi 14"],
    },
    {
      title: "Laptop",
      data: ["MacBook Pro", "Dell XPS 13", "HP Spectre x360"],
    },
    {
      title: "Máy tính bảng",
      data: ["iPad Pro", "Samsung Tab S9", "Lenovo Tab P12"],
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={products}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        ListHeaderComponent={
          <Text style={styles.mainTitle}>Danh sách sản phẩm</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 6,
    marginTop: 12,
  },
  item: {
    padding: 12,
    marginBottom: 6,
    backgroundColor: "#e6f0ff",
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});
