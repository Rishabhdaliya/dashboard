import { useState } from 'react'
import Login from './Component/Login/Login'
import Layout from './Component/Layout/Layout'
import Dashboard from './Component/Dashboard/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Layout >
  <Dashboard />
  </Layout>
    </>
  )
}

export default App
