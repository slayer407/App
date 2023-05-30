import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';

function SearchScreen({ navigation }) {
  return (
    // just calls searchbar from the component folder
    <ScrollView style={styles.container}>
      <SearchBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;