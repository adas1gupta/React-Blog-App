import { useState, useEffect } from "react";

function useBlogs (page) {
    const [blogs, setBlogs] = useState([])
    const url = `${page}`

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