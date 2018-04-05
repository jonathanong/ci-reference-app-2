
import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import store from './store'

export const App = () => (
  <Provider store={store}>
    <div />
  </Provider>
)

export default hot(module)(App)
