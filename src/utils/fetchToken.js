

export default function fetchToken() {
    const token = localStorage.getItem('token')
    return token;
}
