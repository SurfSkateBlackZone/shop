import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root')

ReactDOM.render(<App />, container)

serviceWorkerRegistration.register();
