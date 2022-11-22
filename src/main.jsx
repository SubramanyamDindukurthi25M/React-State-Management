import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { App } from './native-useState/App';
// import { App } from './native-useReducer/App';
// import { App } from './native-useEffect/App';
import { App } from './native-use-Memo-CB/App';
import './Styling/Main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
