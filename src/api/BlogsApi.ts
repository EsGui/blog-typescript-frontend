import axios from "axios"

const BlogsApi = {
    listBlog: async (url: string) => {
        const request = await axios.get(url);
        const response = request.data;
        return response;
    },

    sendBlog: async (url: string, content: string) => {
        
    },

    blogEspecific: async(url: string, slug: string) => {
        const request = await axios.post(url,  {
            slug,
        });
        const response = request.data;
        return response;
    }
}

export default BlogsApi