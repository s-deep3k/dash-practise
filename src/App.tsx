import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import RoundedWrapper from './components/ui/RoundedWrapper'

function App() {
  
  return (
    <div className='bg-gray-100 h-screen mx-9 flex flex-col gap-y-2'>
        <Navbar/>
        <div className='flex'>
          <Dashboard/>
          <RoundedWrapper>
            <p>A</p>
          </RoundedWrapper>
          <RoundedWrapper>
            <p>B</p>
          </RoundedWrapper>
          <RoundedWrapper>
            <p>C</p>
          </RoundedWrapper>
        </div>
        <div className='flex w-full'>
          <div className='table'>
            <RoundedWrapper>
            <p>Table I am</p>

            </RoundedWrapper>
          </div>
          <div className='bar-chart'>
            <RoundedWrapper><p>bar chart</p></RoundedWrapper>
          </div>
        </div>
    </div>
  )
}

export default App
