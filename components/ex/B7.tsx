import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const initialProducts = [
  {
    id: "1",
    name: "iPhone 15",
    price: 25000000,
    description: "Điện thoại cao cấp Apple",
  },
  {
    id: "2",
    name: "Samsung Galaxy S23",
    price: 20000000,
    description: "Điện thoại flagship Samsung",
  },
  {
    id: "3",
    name: "MacBook Pro",
    price: 45000000,
    description: "Laptop mạnh mẽ cho dân IT",
  },
  {
    id: "4",
    name: "Dell XPS 15",
    price: 35000000,
    description: "Laptop cao cấp cho công việc",
  },
  {
    id: "5",
    name: "Dell XPS 15",
    price: 35000000,
    description: "Laptop cao cấp cho công việc",
  },
  {
    id: "6",
    name: "Dell XPS 15",
    price: 35000000,
    description: "Laptop cao cấp cho công việc",
  },
  {
    id: "7",
    name: "Dell XPS 15",
    price: 35000000,
    description: "Laptop cao cấp cho công việc",
  },
];

const moreProducts = [
  {
    id: "8",
    name: "iPad Pro",
    price: 30000000,
    description: "Máy tính bảng Apple mạnh mẽ",
  },
  {
    id: "9",
    name: "Sony WH-1000XM5",
    price: 9000000,
    description: "Tai nghe chống ồn tuyệt đỉnh",
  },
  {
    id: "10",
    name: "Apple Watch Series 9",
    price: 12000000,
    description: "Đồng hồ thông minh Apple",
  },
  {
    id: "11",
    name: "Logitech MX Master 3S",
    price: 2500000,
    description: "Chuột không dây cho dân văn phòng",
  },
];

export default function Ex07() {
  const [products, setProducts] = useState(initialProducts);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const loadMore = () => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    setTimeout(() => {
      setProducts((prev) => [...prev, ...moreProducts]);
      setHasMore(false);
      setLoadingMore(false);
    }, 2000);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Danh sách sản phẩm ({products.length})
      </Text>
    </View>
  );

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#0000ff" />
        <Text style={{ marginLeft: 8 }}>Đang tải thêm...</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price.toLocaleString()} đ</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 12 },
  header: { padding: 12, backgroundColor: "#f2f2f2", borderRadius: 8 },
  headerText: { fontSize: 18, fontWeight: "bold" },
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#e6f0ff",
    borderRadius: 8,
  },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 14, color: "green", marginVertical: 4 },
  desc: { fontSize: 13, color: "#555" },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
});
