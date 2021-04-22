import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(promiseMiddleware, logger)
  )
  const persistore = persistStore(store)
  return { store, persistore }
}
