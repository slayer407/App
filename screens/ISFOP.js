import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { useFocusEffect } from '@react-navigation/native';

function ResourceScreen({ navigation }) {
  const [data, setData] = useState([]);

  // calls script to display resources of a category
  const fetchData = () => {
    fetch('http://loki.lincolnu.edu/~cs451sp23/category_scripts/get_unit_15.php')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };

  // allows script to run when screen is navigated to
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  // displays resource, cycles to show everything in that category
  const displayData = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.resource}>
        {item.DR_Img_URL ? (
          <TouchableOpacity onPress={() => Linking.openURL(item.DR_URL)}>
            <Image source={{ uri: item.DR_Img_URL }} style={styles.image}/>
            <Text style={styles.linkText} onPress={() => Linking.openURL(item.DR_URL)}>{item.DR_Title || item.DR_URL}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => Linking.openURL(item.DR_URL)}>
            <Image source={require('../assets/stock.png')} style={styles.image} />
            <Text style={styles.linkText} onPress={() => Linking.openURL(item.DR_URL)}>{item.DR_Title || item.DR_URL}</Text>
          </TouchableOpacity>
        )}
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.length ? (
        displayData()
      ) : (
        <Text>Loading data...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  resource: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    width: '90%',
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default ResourceScreen;