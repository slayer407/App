import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text, FlatList, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';

// searchbar function
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //calls script to then return resources
  const fetchSearchResults = async (query) => {
    const response = await fetch(`http://loki.lincolnu.edu/~cs451sp23/search_testing/test.php?keyword=${query}`);
    const data = await response.json();
    setSearchResults(data);
  };

  //search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchSearchResults(query);
  };

  // defines the attributes from the DATABASE or defaults if not found
  const renderItem = ({ item }) => {
    let title = item.DR_Title || item.DR_URL;
    let image = item.DR_Img_URL || '../assets/stock.png';
    let link = item.DR_URL || '#';

    return (
      //returns the resource
      <TouchableOpacity onPress={() => { Linking.openURL(link) }}>
        <View style={styles.resource}>
          <TouchableOpacity onPress={() => { Linking.openURL(link) }}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchQuery}
        icon="magnify"
        style={{
          borderRadius: 0,
          backgroundColor: '#EFEFEF',
        }}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resource: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    width: '90%',
  },
  image: {
    width: '100%',
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

export default SearchBar;