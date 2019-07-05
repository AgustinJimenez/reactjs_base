import React from 'react'
import 'typeface-roboto'
import { hot } from 'react-hot-loader'
import ErpPage from './pages/Erp'


class App extends React.Component {
  render() {
    return <ErpPage />
  }
}

export default hot(module)(App)
