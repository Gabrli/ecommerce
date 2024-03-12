import axios from "axios"

export const GET_INFO_BANER_QUERY  = async () => {
    return await axios.get('http://127.0.0.1:8000/baner/')
}