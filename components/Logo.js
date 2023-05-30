import React from 'react';
import { Image } from 'react-native';

// holds the LU logo
function LogoTitle() {
  return (
    <Image
      style={{ width:120, height: 70 }}
      source={require('../assets/lu.png')}
    />
  );
}

export default LogoTitle;