import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

import ScoreBox from './ScoreBox'

const RepositoryFooter = ({
  stargazersCount,
  forksCount,
  ratingAverage,
  reviewCount
}) => {


  return (
    <View style={styles.container}>
      <ScoreBox label="Stars" value={stargazersCount}></ScoreBox>
      <ScoreBox label="Forks" value={forksCount}></ScoreBox>
      <ScoreBox label="Reviews" value={reviewCount}></ScoreBox>
      <ScoreBox label="Rating" value={ratingAverage}></ScoreBox>
    </View>
  )
}

export default RepositoryFooter

