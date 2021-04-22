import React from 'react'
import {
  SafeAreaView
} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Main from './src/Main'
import stores from './src/redux/stores'

const App = (props) => {
  return (
    <Provider store={stores().store}>
      <PersistGate loading={null} persistor={stores().persistore}>
        <SafeAreaView style={{ flex: 1 }}>
          <Main />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}

export default App
