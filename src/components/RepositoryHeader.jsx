import { View, StyleSheet } from 'react-native';
import Text from './Text'
import SubHeading from './Subheading';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 0,
    paddingHorizontal: 10,
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },
  name: {
    fontWeight: theme.fontWeights.bold,
  },
  description: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textSecondary
  },
  language: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    overflow: 'hidden',
    padding:4
  }
})

const RepositoryHeader = ({ fullName, description, language }) => {
  return (
    <View style={styles.container}>
      <SubHeading style={styles.name}>{fullName}</SubHeading>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.language}>{language}</Text>
    </ View>
  )
}

export default RepositoryHeader;