import { useQuery } from "@tanstack/react-query";

function useBlogs (page, blogsPerPage) {
    const url = `http://localhost:5000/blogs?page=${page}&limit=${blogsPerPage}`;

    async function fetchBlogs(url) {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    const blogs = useQuery({
        queryKey: ['pastBlogs', page], //unique identifier for the type of query
        queryFn: () => fetchBlogs(url)
    })

    return { blogs }
}

export default useBlogs
