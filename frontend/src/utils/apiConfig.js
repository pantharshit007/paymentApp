const PORT = 4000
// const BACKEND_URL = `http://localhost:${PORT}/api/v1/`
const BACKEND_URL = import.meta.env.VITE_BE_URL

export default BACKEND_URL
