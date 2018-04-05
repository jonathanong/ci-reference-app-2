
import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import SubmitShaForm from './components/SubmitShaForm'
import store from './store'

export const App = () => (
  <Provider store={store}>
    <SubmitShaForm />
  </Provider>
)

export default hot(module)(App)
