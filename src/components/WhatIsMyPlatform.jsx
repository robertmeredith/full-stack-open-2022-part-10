import { StyleSheet, Platform, Text } from 'react-native'

// Using Platform.OS approach
const styles1 = StyleSheet.create({
  text: {
    color: Platform.OS === 'android' ? 'green' : 'blue',
  },
})

// Using Platform.select approach
const styles2 = StyleSheet.create({
  text: {
    color: Platform.select({
      android: 'green',
      ios: 'blue',
      default: 'black'
    })
  }
})

// Platform.select to select relevant comonent
const MyComponent = Platform.select({
  ios: () => require('./MyIOSComponent'),
  androis: () => require('./MyAndroidComponent'),
})

// Selecting component using file extensions - using files 'Button.android.jsx' and 'Button.ios.jsx'
import Button from './Button'
const PlatformSpecificButton = () => {
  return <Button />
}



const WhatIsMyPlatform = () => {
  return <Text style={styles1.text}>Your platform is: {Platform.OS}</Text>
}

export default WhatIsMyPlatform
