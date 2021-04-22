/* eslint-disable react/prop-types */
import React from 'react'
import {
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TextInput
        style={[styles.textInput]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />

      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    lineHeight: 16,
    alignItems: 'center',
    opacity: 0.5,
    backgroundColor: '#DFDEDE',
    borderRadius: 10,
    fontFamily: 'nunito',
    // fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 51
  },
  errorText: {
    fontSize: 12,
    color: '#d50000',
    marginBottom: 10
  }
})

export default CustomInput
