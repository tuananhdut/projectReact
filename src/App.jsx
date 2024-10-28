import { Outlet } from 'react-router-dom'
import Header from './components/layout/header'
import UserPage from './pages/user'
import "./style/global.css"

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
