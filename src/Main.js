import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// screens
import Login from './screens/Login'
import Register from './screens/Register'

const Stack = createStackNavigator()

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Register'
          component={Register}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
