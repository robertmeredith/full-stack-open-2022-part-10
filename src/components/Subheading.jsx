import {StyleSheet } from 'react-native'
import Text from './Text'

import theme from '../theme'

const SubHeading = ({...props}) => {

  return <Text fontSize="subheading" color="secondary" {...props} />
}

export default SubHeading;
