import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' Component={Home}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
