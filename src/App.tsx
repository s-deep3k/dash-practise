import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className='bg-gray-100 h-screen mx-9 flex flex-col gap-y-2'>
        <Navbar/>
        <div className='flex'>
        <Dashboard/>
        <Dashboard/>
        <Dashboard/>
        </div>
    </div>
  )
}

export default App
