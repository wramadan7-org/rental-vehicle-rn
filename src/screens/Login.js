/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
  StatusBar
} from 'react-native'

import Background from '../../assets/images/apk/background-login.png'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CustomInput from '../components/CustomInput'
import loginAction from '../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'

const Login = (prop) => {
  const loginSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Paswword must bee at least ${min} characters`)
      .required('Password is required')
  })
  // console.log(prop)

  const loginState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  console.log(`STATE ${loginState}`)

  const logined = async (values) => {
    const actionLogin = await dispatch(loginAction.login(values))
    console.log(actionLogin)
  }

  return (
    <ImageBackground
      source={Background}
      style={styles.backgroundImg}
    >
      <StatusBar translucent backgroundColor='transparent' />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>{'LET\'S EXPLORE'}</Text>
              <Text style={styles.title}>THE WORLDS</Text>
            </View>

            <View />

            <View style={styles.viewGrupInput}>
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validationSchema={loginSchema}
                onSubmit={values => logined(values)}
              >
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name='email'
                      placeholder='Email'
                      placeholderTextColor='#212121'
                    />

                    <Field
                      component={CustomInput}
                      name='password'
                      placeholder='Password'
                      placeholderTextColor='#212121'
                      secureTextEntry
                    />

                    <View style={styles.viewFotgotPassword}>
                      <Text
                        style={styles.textForgotPassword}
                        onPress={() => console.log('Forgot pressed')}
                      >
                          Forgot password?
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.viewToSignUp}>
                      <Text
                        style={styles.textRegister}
                      >
                        {'Don\'t have account?'}
                        <Text
                          style={[
                            styles.textRegister, {
                              textDecorationLine: 'underline',
                              fontWeight: 'bold'
                            }
                          ]}
                          onPress={() => prop.navigation.navigate('Register')}
                        >
                          {' Sign up now'}
                        </Text>
                      </Text>
                    </View>
                  </>
                )}
              </Formik>
              {/* <TextInput
                placeholder='Username'
                placeholderTextColor='black'
                style={styles.textInput}
              />

              <TextInput
                placeholder='Password'
                placeholderTextColor='black'
                style={styles.textInput}
              /> */}

            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover'
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
    justifyContent: 'space-evenly',
    flexGrow: 1
  },
  viewTitle: {
    marginTop: 10
  },
  title: {
    color: 'white',
    fontFamily: 'normal',
    fontSize: 36,
    fontWeight: 'bold'
  },
  viewGrupInput: {
    justifyContent: 'center',
    alignContent: 'flex-end'
  },
  // textInput: {
  //   lineHeight: 16,
  //   alignItems: 'center',
  //   opacity: 0.5,
  //   backgroundColor: '#DFDEDE',
  //   borderRadius: 10,
  //   fontFamily: 'nunito',
  //   fontWeight: 'bold',
  //   fontSize: 14,
  //   color: 'black',
  //   paddingHorizontal: 10,
  //   marginVertical: 10,
  //   height: 51
  // },
  viewFotgotPassword: {
    marginBottom: 20
  },
  textForgotPassword: {
    color: 'white',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'serif'
  },
  button: {
    backgroundColor: '#FFCD61',
    height: 51,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  textButton: {
    color: 'black',
    fontFamily: 'serif',
    fontSize: 17,
    fontWeight: 'bold'
  },
  viewToSignUp: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textRegister: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 15
  }
})

export default Login
