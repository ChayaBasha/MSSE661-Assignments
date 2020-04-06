const BASE_API_URL = 'http://localhost:4000/api'; 
const USER_API = `${BASE_API_URL}/user`; 

function register(formData) {
  return _post(`${USER_API}`, formData);
}

function login(formData) {
  return _post(`${USER_API}/login`, formData);
}