import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Toaster } from "react-hot-toast";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    <Toaster position='bottom-center' reverseOrder={false} />
  </React.StrictMode>,
  </Provider>
)
