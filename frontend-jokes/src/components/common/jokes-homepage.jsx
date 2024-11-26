// imports
// import axios from "axios"
import "bulma/css/bulma.min.css"
import { useState } from "react"
import postJokes from "../../services/post-jokes"


// component logic
export default function SubmitJokes() {
    const [jokes, setJokes] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const result = postJokes(jokes)
        try {
        setJokes("")

        console.log("Successfully created joke", jokes)
        return result
        }
        catch (err) {
            return console.error.send(err)
        }
    }

    const handleEvent = (event) => {
        const content = event.target.value
        setJokes(content)
        console.log(content)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <div className="column is-full">
                        <label className="label" >Type in a joke:</label>
                        <textarea 
                        className="textarea is-medium is-primary" 
                        rows="5"
                        onChange={handleEvent}
                        value={jokes}>
                        </textarea>
                    </div>
                    <div>
                        <button className="button" 
                        type='submit'
                        >Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}