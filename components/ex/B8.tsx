import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Interface cho bài viết
interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
}

// Dữ liệu giả lập ban đầu
const initialData: BlogPost[] = [
  {
    id: "1",
    title: "React Native là gì?",
    author: "John Doe",
    date: "2021-09-01",
  },
  {
    id: "2",
    title: "Làm quen với Redux",
    author: "Jane Smith",
    date: "2021-09-05",
  },
  {
    id: "3",
    title: "Giới thiệu về JavaScript",
    author: "Alice Johnson",
    date: "2021-09-10",
  },
  {
    id: "4",
    title: "Hướng dẫn CSS Flexbox",
    author: "Bob Brown",
    date: "2021-09-12",
  },
  {
    id: "5",
    title: "Học lập trình web từ đâu?",
    author: "Charlie Davis",
    date: "2021-09-15",
  },
];

// Dữ liệu giả lập sau khi load more
const newPosts: BlogPost[] = [
  {
    id: "6",
    title: "Tìm hiểu về Node.js",
    author: "David Green",
    date: "2021-09-20",
  },
  {
    id: "7",
    title: "JavaScript Asynchronous Programming",
    author: "Eve White",
    date: "2021-09-22",
  },
  {
    id: "8",
    title: "React vs Angular",
    author: "Frank Black",
    date: "2021-09-25",
  },
  {
    id: "9",
    title: "Học lập trình Python",
    author: "Grace Blue",
    date: "2021-09-27",
  },
  {
    id: "10",
    title: "Sử dụng Git hiệu quả",
    author: "Hannah Red",
    date: "2021-09-30",
  },
];

export default function B8() {
  const [posts, setPosts] = useState<BlogPost[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  // Hàm mô phỏng tải thêm dữ liệu
  const loadMorePosts = () => {
    if (loading || !hasMoreData) return;

    setLoading(true);
    
    // Mô phỏng delay của API
    setTimeout(() => {
      const currentLength = posts.length;
      const nextBatch = newPosts.slice(currentLength - initialData.length, currentLength - initialData.length + 2);
      
      if (nextBatch.length === 0) {
        setHasMoreData(false);
        Alert.alert("Thông báo", "Đã tải hết dữ liệu!");
      } else {
        setPosts(prevPosts => [...prevPosts, ...nextBatch]);
      }
      
      setLoading(false);
    }, 1500);
  };

  // Component hiển thị tiêu đề danh sách
  const ListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>📝 Danh sách bài viết</Text>
      <Text style={styles.headerSubtitle}>
        Tổng số bài viết: {posts.length}
      </Text>
      <View style={styles.divider} />
    </View>
  );

  // Component hiển thị footer khi đang tải
  const ListFooter = () => {
    if (!loading) return null;
    
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#007AFF" />
        <Text style={styles.loadingText}>Đang tải thêm...</Text>
      </View>
    );
  };

  // Component hiển thị từng bài viết
  const renderPost = ({ item }: { item: BlogPost }) => (
    <TouchableOpacity 
      style={styles.postItem}
      onPress={() => Alert.alert("Bài viết", `Đã chọn: ${item.title}`)}
    >
      <View style={styles.postContent}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <View style={styles.postMeta}>
          <Text style={styles.postAuthor}>👤 {item.author}</Text>
          <Text style={styles.postDate}>📅 {item.date}</Text>
        </View>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  // Component hiển thị khi hết dữ liệu
  const EmptyFooter = () => (
    <View style={styles.emptyFooter}>
      <Text style={styles.emptyText}>🎉 Bạn đã xem hết tất cả bài viết!</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={hasMoreData ? ListFooter : EmptyFooter}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: '#007AFF',
    marginTop: 15,
    borderRadius: 1,
  },
  postItem: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  postContent: {
    flex: 1,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  postMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postAuthor: {
    fontSize: 14,
    color: '#666',
  },
  postDate: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
  emptyFooter: {
    padding: 30,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
});
