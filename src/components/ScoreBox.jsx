import { View, StyleSheet } from 'react-native'
import Text from './Text'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: 8
  },
  box: {
    alignSelf: 'center'
  },
  score: {
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold
  }
})

const ScoreBox = ({ label, value }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.score}>{value}</Text>
      <Text style={styles.box}>{label}</Text>
    </View>
  )
}

export default ScoreBox
