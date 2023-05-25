import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "03716d4e7c994da986f80e877728f4cc"
    }
})