import './App.css'

// components
import SubmitJokes from './components/common/jokes-homepage'
import ViewJokes from './components/common/view-jokes'

function App() {

  // useEffect(() => {
  //   axios.post("http://localhost:3000/jokes/joke").then((res) => {
  //     const { data } = res
  //     console.log(data)
  //   })
  // }, [])

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