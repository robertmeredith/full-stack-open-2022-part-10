import { View, StyleSheet, Pressable } from 'react-native'
import Text from './Text'
import FormikTextInput from './FormikTextInput'

import theme from '../theme'

const styles = StyleSheet.create({
  button: {
    marginVertical: 12,
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignItems: 'center'
  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  }
})



const SignInForm = ({onSubmit}) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder={'Username'} />
      <FormikTextInput name="password" placeholder={'Password'} secureTextEntry />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm
