import { useState } from 'react'
import './App.css'
import { Home } from "@pages";
import {AppProvider} from "@contexts"

function App() {
  
  return (
    <div className="App">
      <AppProvider>
      <Home/>
      </AppProvider>
    </div>
  )
}

export default App
