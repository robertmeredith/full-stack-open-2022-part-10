import { View, Text, StyleSheet, Image, Constants } from 'react-native'

import theme from '../theme'
import RepositoryFooter from './RepositoryFooter'
import RepositoryHeader from './RepositoryHeader'

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.white,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    // borderColor: 'black',
    // borderWidth: 1, 
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 7,
  },
})

const RepositoryItem = ({
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  const headerProps = {
    fullName,
    description,
    language,
  }


  const convertToK = (rating) => {
    if (rating > 1000) {
      let value = (rating / 1000).toFixed(1)
      return `${value}k`
    }
    return rating
  }


  const footerProps = {
    stargazersCount: convertToK(stargazersCount),
    forksCount: convertToK(forksCount),
    ratingAverage: convertToK(ratingAverage),
    reviewCount: convertToK(reviewCount),
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.tinyLogo} source={{ uri: ownerAvatarUrl }} />
        <RepositoryHeader {...headerProps} />
      </View>
      <RepositoryFooter {...footerProps} />
    </View>
  )
}

export default RepositoryItem
