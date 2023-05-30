import React from 'react';
import { View, Button, ScrollView, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('AEA')}
        style={styles.button}>
          <Text style={styles.buttonText}>Association of Extension Administrators</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Hemp Institute')}
        style={styles.button}>
          <Text style={styles.buttonText}>Hemp Institute</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Horticulture')}
        style={styles.button}>
          <Text style={styles.buttonText}>Horticulture</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('ISFOP')}
        style={styles.button}>
          <Text style={styles.buttonText}>Innovative Small Farmers Outreach Program</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('IPMP')}
        style={styles.button}>
          <Text style={styles.buttonText}>Integrated Pest Management Program</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('PJC')}
        style={styles.button}>
          <Text style={styles.buttonText}>Paula J. Carter Center on Minority Health and Aging</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('SRP')}
        style={styles.button}>
          <Text style={styles.buttonText}>Small Ruminant Program</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('WLS')}
        style={styles.button}>
          <Text style={styles.buttonText}>Wildlife Science</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Youth 4-H')}
        style={styles.button}>
          <Text style={styles.buttonText}>Youth Development and 4-H Program</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
  },
  container: {
    flex: 1,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#0C2340',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
