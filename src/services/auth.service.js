import axios from "axios";
import authHeader from "../helpers/authHeader";

const API_URL = "http://localhost:5000/hospital/";

function register(user) {
    return axios.post(API_URL + "register", user)
};

function login(id, password) {
    return axios.post(API_URL + "login", {
        id,
        password,
    }).then(
        user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
};

function logout() {
    localStorage.removeItem('user');
};

function getAll() {
    return axios.get(API_URL, { headers: authHeader(), 'Access-Control-Allow-Origin': true });

}

function getById(_id) {
    return axios.get(API_URL + _id, { headers: authHeader });
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}


export default { register, login, logout, getAll, getById };