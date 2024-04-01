import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import Home from './pages/Home'
import { useState } from 'react'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/send' element={<SendMoney />} />
        <Route path='/dashboard' element={
          <PrivateRoute >
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
      {/* similar to dashboard we can also implement same for /signup and /signin
        but i woud't since i am lazy! :) */}
    </div>
  )
}

export default App
