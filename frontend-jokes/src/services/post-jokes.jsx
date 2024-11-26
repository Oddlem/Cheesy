import axios from "axios";

export default async function postJokes(joke) {
    const result = await axios.post("https://0bc6-45-172-222-42.ngrok-free.app/jokes/new", { content: joke })

    return result.data

}