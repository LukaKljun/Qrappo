import { useState } from 'react';
import {
   View, Text, TextInput, TouchableOpacity, FlatList, Image
  } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';


import { icons, SIZES } from '../../../constants';

import styles from './Welcome.style'

const Welcome = () => {
  const router = useRouter();
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Luka</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      
    </View>
  )
}

export default Welcome