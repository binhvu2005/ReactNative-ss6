import B1 from "@/components/ex/B1";
import B2 from "@/components/ex/B2";
import B3 from "@/components/ex/B3";
import B4 from "@/components/ex/B4";
import B5 from "@/components/ex/B5";
import B6 from "@/components/ex/B6";
import B7 from "@/components/ex/B7";
import B8 from "@/components/ex/B8";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>Bài 1</Text>
        <B1 />
        
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>Bài 2</Text>
        <B2 />
        
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>Bài 3</Text>
        <B3 />
        
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>Bài 4</Text>
        <B4 />
        
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>Bài 5</Text>
        <B5 />
        
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>Bài 6</Text>
        <B6 />
        
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>Bài 7</Text>
        <B7 />
        
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>Bài 8</Text>
        <B8 />
      </ScrollView>
    </SafeAreaView>
  );
}
