import axios from 'axios'
import fetchToken from './fetchToken'

const BASE_URL = '';

export async function fetchWhoAmI(){
    try {
        const token = fetchToken();
        const res = await axios.get(`${BASE_URL}api/auth/whoami`, { headers: { Authorization: token } })
    } catch(error) {
        console.log('axiosWithAuth has an error')
    }
}

export default function axiosWithAuth() {
    const user = fetchWhoAmI();

    const token = fetchToken();
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: token,
            user: user
        }
    })
}