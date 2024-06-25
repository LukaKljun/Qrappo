import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const mediaTypes = ['image', 'video', 'audio'];


const gumb = () => {
    const router = useRouter();
    const [activeMediaType, setActiveMediaType] = useState(mediaTypes[0])
    return (
        <View style={styles.tabsContainer}>
        <FlatList
          data={mediaTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeMediaType, item)}
              onPress={() => {
              setActiveMediaType(item);
              //router.push(`/search/${item}`)  a to rabm?
              }}
            >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
        )}
        horizontal
        keyExtractor={(item) => item}
        contentContainerStyle={{columnGap: SIZES.small}}
        />
      </View>
    )
};