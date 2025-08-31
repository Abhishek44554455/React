// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Clock from "./components/Clock";
import AppName from "./components/AppName";
import Text from "./components/text";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <center>
        <AppName></AppName>
        <Text></Text>
        <Clock></Clock>
      </center>
    </div>
  );
}

export default App;
