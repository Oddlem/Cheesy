import axios from "axios"
import "bulma/css/bulma.min.css"
// import { useState } from "react"

export default function ViewJokes() {

const getJokes = async () => {
    // const [jokes, setJoke] = useState([])
    try {
        // the original URL is an ngrok tunnel, so I decided to anonymize it
        const result = await axios.get("url/jokes/joke")
        console.log(result)
        const jokeObj = result.data.rows
        const contentJokes = jokeObj.map(joke => joke.content)
            console.log(contentJokes)
        // setJoke(contentJokes)
    }
    catch (err) {
        console.error.send(err)
    }
  }
 
  return (
    <>
        <div className="container">
            <div className="box">
                <div className="container">
            
                <h1 className="title">All jokes:</h1>
                <button onClick={getJokes}>Click to refresh</button>
                <div>
                    {}
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

