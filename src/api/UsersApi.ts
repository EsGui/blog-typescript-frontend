import axios from "axios";

const UsersApi = {
    registerUser: async (url: string, name: string, email: string, password: string) => {
        const request = await axios.post(url, {
            name,
            email,
            password
        });
        return request.data;
    }
}

export default UsersApi;