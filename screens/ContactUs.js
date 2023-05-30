import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ContactUsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Name: Callie Newsom</Text>
      <Text>Department: Cooperative Extension 4 H Youth Development</Text>
      <Text>Organization: Lincoln University of Missouri</Text>
      <Text>Phone: 573-681-5525</Text>
      <Text>E-Mail: NewsomCLincolnU.edu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ContactUsScreen;