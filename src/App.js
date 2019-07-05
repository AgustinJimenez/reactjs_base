import React from 'react'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import { hot } from 'react-hot-loader'

const App = () => (
  <Typography variant="h4" gutterBottom>
    Hello, World
  </Typography>
);

export default hot(module)(App);
