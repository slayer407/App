import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { useFocusEffect } from '@react-navigation/native';

function RandomScreen({ navigation }) {
  const [data, setData] = useState({});

  // calls script to randomly get one resource
  const login = () => {
    fetch('http://loki.lincolnu.edu/~cs451sp23/random.php')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  };

  // links resource to PDF from the DATABASE
  const openUrl = () => {
    Linking.openURL(data.url);
  };

  // prevents cycle bug
  useFocusEffect(
    React.useCallback(() => {
      login();
      return () => { };
    }, [])
  );

  return (
    // returns resource
    <View style={styles.container}>
      {data.image_url ? (
        <TouchableOpacity onPress={openUrl}>
          <Image source={{ uri: data.image_url }} style={styles.image} />
          <Text style={styles.title}>{data.title || data.url}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={openUrl}>
          <Image source={require('../assets/stock.png')} style={styles.image} />
          <Text style={styles.title}>{data.title || data.url}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RandomScreen;