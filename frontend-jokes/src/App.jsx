import './App.css'

// components
import SubmitJokes from './components/common/jokes-homepage'
import ViewJokes from './components/common/view-jokes'

function App() {


  return (
    <>
      <div>
        <SubmitJokes />
      </div>
      <div>
        <ViewJokes />
      </div>
    </>
  )
}

export default App