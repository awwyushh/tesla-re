import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './Ayush/LoadingScreen.jsx'
// import LoadingScreen from './Ayush/LoadingScreen.jsx'
import Rishabh from './Rishabh.jsx'
import LoadingScreen from './Ayush/LoadingScreen.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingScreen/>
    {/* <App /> */}
    {/* <Rishabh/> */}
  </StrictMode>,
)
