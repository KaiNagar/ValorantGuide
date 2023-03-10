import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/styles/style.scss'

import { routes } from './routes'

import { Home } from './pages/Home'
import { Login } from './pages/Login'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { Explore } from './pages/Explore'
import { AgentDetails } from './pages/categories/agents/AgentDetails'

export function App() {
  return (
    <Router>
      <div className='App'>
        <AppHeader />
        <div className='main-container'>
          <div className='main container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/explore' element={<Explore />} />
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
              <Route path='/agents/:agentId' element={<AgentDetails />} />
            </Routes>
          </div>
        </div>
        <AppFooter />
      </div>
    </Router>
  )
}

export default App
