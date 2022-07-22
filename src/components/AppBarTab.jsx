import { Pressable, Alert } from 'react-native'
import {Link} from 'react-router-native'

import Text from './Text'

const AppBarTab = ({ label, style, link }) => {
  return (
    <Pressable>
      <Link to={link}>
        <Text style={style}>{label}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab
