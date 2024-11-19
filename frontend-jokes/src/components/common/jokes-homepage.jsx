// imports
// import axios from "axios"
import "bulma/css/bulma.min.css"
import { useState } from "react"


// component logic
export default function SubmitJokes() {
    const [jokes, setJokes] = useState("")



    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(jokes)
    }

    const handleEvent = (event) => {
        const content = event.target
        setJokes(content)
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
                        onChange={handleEvent}>
                        </textarea>
                    </div>
                    <div>
                        <button className="button" type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}