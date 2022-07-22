import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.danger
  },
  inputBox: {
    padding: theme.padding.normal,
    marginTop: 12,
    borderWidth: 1,
    borderColor: theme.colors.lightBackground,
    borderRadius: 5
  }
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  // Show error if error present and if field has been 'touched' (received and lost focus)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={{
          ...styles.inputBox,
          borderColor: showError
            ? theme.colors.danger
            : theme.colors.lightBackground,
        }}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
