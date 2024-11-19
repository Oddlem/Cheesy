import axios from "axios"
import "bulma/css/bulma.min.css"
// import { useState } from "react"

export default function ViewJokes() {

const getJokes = async () => {
    // const [jokes, setJoke] = useState([])

    const result = await axios.get("http://localhost:3000/jokes/joke")
    const jokeObj = result.data.rows
    const contentJokes = jokeObj.map(joke => joke.content)
    // setJoke(contentJokes)

    return console.log(contentJokes)
  }

  return (
    <>
        <div className="container">
            <div className="box">
                <div className="container">
            
                <h1 className="title">All jokes:</h1>
                <button onClick={getJokes}>Click to refresh</button>
                <div>
                    {/* the data goes here */}
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

