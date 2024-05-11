import axios from "axios";

const UsersApi = {
    registerUser: async (url: string, name: string, email: string, nickname: string, password: string) => {
        const request = await axios.post(url + "register-user", {
            name,
            email,
            nickname,
            password
        });
        return request.data;
    },
    loginUser: async (url: string, email: string, password: string) => {
        const request = await axios.post(url + "login", {
            email,
            password
        });
        return request.data;
    },

    persistLogin: async (url: string) => {
        const token = localStorage.getItem("Token");
        if (token) {
            const request = await axios.post(url + "persist-login", {
                token: JSON.parse(token),
            });

            return request.data;
        }
    }
}

export default UsersApi;