import * as yup from 'yup'

import { Formik } from 'formik'
import { View, StyleSheet } from 'react-native'
import Text from './Text'
import FormikTextInput from './FormikTextInput'

import theme from '../theme'
import SignInForm from './SignInForm'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    backgroundColor: theme.colors.white,
  },
})

const onSubmit = () => {
  console.log('SUBMITTED')
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must contain at least 5 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(7, 'Password must contain at lest 7 characters')
    .required('Password is required'),
})

const SignIn = () => {
  return (
    <View style={styles.container}>
      {/* <Formik initialValues={{username: '', password: ''}}>
        <SignInForm onSubmit={onSubmit}/> */}
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default SignIn
