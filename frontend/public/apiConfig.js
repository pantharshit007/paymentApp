const PORT = 4000
// const BACKEND_URL = `http://localhost:${PORT}/api/v1/`
const BACKEND_URL = import.meta.env.VITE_BE_URL
//For production shift this env value to a .env file in the root directory outside of src and then call upon it
// const BACKEND_URL = process.env.REACT_APP_BE_URL

export default BACKEND_URL
