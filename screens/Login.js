import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Register = () => {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  // clears inputs
  const clearInputs = () => {
    setfName('');
    setlName('');
    setEmail('');
    setAddress('');
    setNumber('');
    setZip('');
    setCity('');
    setState('');
  };

  // calls script to put information into the DATABASE
  const registerUser = async () => {
    try {
      const response = await fetch('http://loki.lincolnu.edu/~cs451sp23/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `fname=${fname}&lname=${lname}&email=${email}&address=${address}&number=${number}&zip=${zip}&city=${city}&state=${state}`,
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        alert('Registration successful!');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      alert('Registration failed. Please try again.');
      console.error(error);
    }
  };

  // display of text inputs
  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name:</Text>
      <TextInput
        value={fname}
        style={styles.input}
        maxLength={50}
        onChangeText={(text) => setfName(text)}
      />
      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        value={lname}
        style={styles.input}
        maxLength={50}
        onChangeText={(text) => setlName(text)}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={email}
        style={styles.input}
        maxLength={50}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Address:</Text>
      <TextInput
        value={address}
        style={styles.input}
        maxLength={70}
        onChangeText={(text) => setAddress(text)}
      />
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        value={number}
        style={styles.input}
        maxLength={50}
        onChangeText={(text) => setNumber(text)}
      />
      <Text style={styles.label}>City:</Text>
      <TextInput
        value={city}
        style={styles.input}
        maxLength={50}
        onChangeText={(text) => setCity(text)}
      />
      <Text style={styles.label}>State:</Text>
      <TextInput
        value={state}
        style={styles.input}
        maxLength={50}
        onChangeText={(text) => setState(text)}
      />
      <Text style={styles.label}>Zip:</Text>
      <TextInput
        value={zip}
        style={styles.input}
        maxLength={50}
        onChangeText={(text) => setZip(text)}
      />
      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => {
          registerUser();
          clearInputs();
        }}
        style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function LoginScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Register />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
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
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  label: {
    alignSelf: 'flex-start',
    marginVertical: 5,
    fontWeight: 'bold',
  },
});