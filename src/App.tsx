import React from 'react'
import './App.css'

import Cards from './features/covid/Cards/Cards'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Cards />
      </header>
    </div>
  )
}

export default App
