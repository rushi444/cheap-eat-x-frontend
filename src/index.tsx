import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-7t102zrf.us.auth0.com'
      clientId='6IhUrJVq8XndtM6D4V3mVTcF9unxyUeQ'
      redirectUri={window.location.origin}
      audience='https://dev-7t102zrf.us.auth0.com/api/v2/'
      scope='read:current_user update:current_user_metadata'
      >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()