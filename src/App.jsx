import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Main from './components/Main/Main'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Index bu asosiy "/" yo'lida turadigan sahifa degani */}
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App