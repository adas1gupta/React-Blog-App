import { useState, useEffect } from "react";

function useBlogs (page, blogsPerPage) {
    const [blogs, setBlogs] = useState([])
    const url = `http://localhost:5000/blogs?page=${page}&limit=${blogsPerPage}`;

    useEffect (() => {
        async function fetchBlogs(url) {
            const response = await fetch(url)
            const data = await response.json()
            setBlogs([...blogs, data])
        }

        fetchBlogs(url)
    },[page])

    return { blogs, setBlogs }
}

export default useBlogs