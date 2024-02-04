import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-4' >
        <RevenueCard title = {"Amount Pending"} amount = {"77878988987"} orderCount = {"13"}/>
      </div>
    </>
  )
}

export default App
