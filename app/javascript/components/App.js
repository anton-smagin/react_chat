import React from 'react'

import { ChatPage } from 'components'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <ChatPage />
    </Provider>
  )
}

export default App
