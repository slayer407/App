import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AboutUsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom}>  Since being designated as a land-grant school in 1890, a key part of Lincoln University's mission has been the teaching of agriculture and science. It's a mission we still take seriously today and fulfill in large part via our Cooperative Research and Cooperative Extension programs.</Text>

      <Text style={styles.marginBottom}>  Lincoln University Cooperative Extension (LUCE) aims to enhance the quality of life for people throughout Missouri with limited access to resources. Specifically, our programs address the needs of small farm owners throughout the state. We teach key skills relating to sustainability, leadership, agricultural innovation and more so farmers throughout Missouri and beyond can keep up with a changing economy and continue to meet the needs of their customers.</Text>

      <Text style={styles.marginBottom}>  We utilize research-based education and engagement at local, state, regional, national and international levels to achieve our goal. Extension specialists, located primarily on Lincoln's main campus, facilitate extension and outreach programs covering essential subject areas that are relevant and positively impact those living in Missouri.</Text>

      <Text style={styles.marginBottom}>  We also have educators in Urban Impact Centers in both Kansas City and St. Louis, as well as Southeast Missouri outreach centers in Sikeston, Lilbourn and Caruthersville.</Text>

      <Text style={styles.marginBottom}>  To learn more about our Cooperative Extension programs and to see how you can contribute, please contact us or follow the links below.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  marginBottom: {
    marginBottom: 10
  },
});

export default AboutUsScreen;