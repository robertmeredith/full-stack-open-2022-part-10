import { View, StyleSheet, ScrollView } from 'react-native'
import AppBarTab from './AppBarTab'
import Constants from 'expo-constants'

import theme from '../theme'

import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
    opacity: 0.8,
    padding: 10,
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    //...
  },
  navItem: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    padding: 7,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" link="/" style={styles.navItem} />
        <AppBarTab label="Sign in" link="/signin" style={styles.navItem} />
      </ScrollView>
    </View>
  )
}

export default AppBar
