import React, { useState } from "react";
import { SectionList, StyleSheet, Text, TextInput, View } from "react-native";

export default function Ex06() {
  // Dữ liệu gốc
  const sectionsData = [
    {
      title: "Thực phẩm",
      data: ["Táo", "Chuối", "Cam", "Sữa", "Bánh mì"],
    },
    {
      title: "Điện tử",
      data: ["iPhone", "Laptop Dell", "TV Samsung", "Máy tính bảng iPad"],
    },
    {
      title: "Quần áo",
      data: ["Áo thun", "Quần jean", "Áo khoác", "Giày thể thao"],
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredSections, setFilteredSections] = useState(sectionsData);

  // Hàm tìm kiếm
  const handleSearch = (text: string) => {
    setSearch(text);

    if (text.trim() === "") {
      setFilteredSections(sectionsData); // reset
      return;
    }

    const newSections = sectionsData
      .map((section) => {
        const filteredData = section.data.filter((item) =>
          item.toLowerCase().includes(text.toLowerCase())
        );
        return { ...section, data: filteredData };
      })
      .filter((section) => section.data.length > 0); // bỏ section trống

    setFilteredSections(newSections);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm</Text>

      {/* Ô tìm kiếm */}
      <TextInput
        style={styles.searchBox}
        placeholder="Nhập từ khóa tìm kiếm..."
        value={search}
        onChangeText={handleSearch}
      />

      {/* SectionList */}
      <SectionList
        sections={filteredSections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Không tìm thấy kết quả</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  searchBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 6,
    marginTop: 10,
  },
  item: {
    padding: 12,
    backgroundColor: "#e6f0ff",
    borderRadius: 8,
    marginVertical: 4,
  },
  itemText: { fontSize: 16 },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 20,
  },
});
