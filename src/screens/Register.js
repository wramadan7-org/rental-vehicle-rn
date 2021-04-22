import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import Background from '../../assets/images/apk/background-register.png'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CustomInput from '../components/CustomInput'

const Register = (prop) => {
  const registerSchema = yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    phone: yup
      .string()
      .matches(/\d/, 'Enter a valid phone number')
      .min(12, ({ min }) => `Phone number must bee at least ${min} characters`)
      .max(13, ({ max }) => `Phone number must bee at least ${max} characters`)
      .required('Phone number is required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Paswword must bee at least ${min} characters`)
      .required('Password is required')
  })

  return (
    <ImageBackground
      source={Background}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>{'LET\'S HAVE'}</Text>
              <Text style={styles.title}>SOME RIDE</Text>
            </View>

            <View />

            <View style={styles.viewGrupInput}>
              <Formik
                initialValues={{
                  email: '',
                  phone: '',
                  password: ''
                }}
                validationSchema={registerSchema}
                onSubmit={values => console.log(values)}
              >
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name='email'
                      placeholder='Email'
                      placeholderTextColor='#212121'
                      keyboardType='email-address'
                    />

                    <Field
                      component={CustomInput}
                      name='phone'
                      placeholder='Mobile phone'
                      placeholderTextColor='#212121'
                      keyboardType='numeric'
                    />

                    <Field
                      component={CustomInput}
                      name='password'
                      placeholder='Password'
                      placeholderTextColor='#212121'
                      secureTextEntry
                    />

                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.textButton}>Register</Text>
                    </TouchableOpacity>

                    <View style={styles.viewToLogin}>
                      <Text style={styles.textLogin}>Already have an account?</Text>
                      <Text
                        style={[
                          styles.textLogin, {
                            textDecorationLine: 'underline',
                            fontWeight: 'bold'
                          }
                        ]}
                        onPress={() => prop.navigation.navigate('Login')}
                      >
                        {' Login now'}
                      </Text>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  safeAreaView: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-evenly'
  },
  viewTitle: {
    marginTop: 10
  },
  title: {
    color: 'white',
    fontFamily: 'normal',
    fontWeight: 'bold',
    fontSize: 36
  },
  viewGrupInput: {
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#FFCD61',
    borderRadius: 10,
    height: 51,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  textButton: {
    color: 'black',
    fontFamily: 'serif',
    fontSize: 17,
    fontWeight: 'bold'
  },
  viewToLogin: {
    marginTop: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 25
  },
  textLogin: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 15
  }
})

export default Register
