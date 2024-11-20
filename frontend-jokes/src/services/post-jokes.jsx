import axios from "axios";

export default async function postJokes(joke) {
    const result = await axios.post("http://localhost:3000/jokes/new", { content: joke })

    return result.data

}