import axios from "axios"

const BlogsApi = {
    listBlog: async (url: string) => {
        const request = await axios.get(url);
        const response = request.data;
        return response;
    },

    sendBlog: async (url: string, content: string) => {
        
    }
}

export default BlogsApi