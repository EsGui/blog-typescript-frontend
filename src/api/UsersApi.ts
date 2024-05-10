import axios from "axios";

const UsersApi = {
    registerUser: async (url: string, name: string, email: string, nickname: string, password: string) => {
        const request = await axios.post(url, {
            name,
            email,
            nickname,
            password
        });
        return request.data;
    }
}

export default UsersApi;