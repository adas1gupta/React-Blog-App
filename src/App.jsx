import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import useBlogs from "./hooks/useBlogs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Blog from "./Blog";


const queryClient = new QueryClient()

function App () {
    const [page, setPage] = useState(1)
    const postsPerPage = 10

    const { blogs } = useBlogs(page, postsPerPage)
    const totalBlogs = blogs.blogs.length
    const totalPages = Math.ceil(totalBlogs / postsPerPage);

    return (
        <div>
            <ul>
                {blogs.data.map((blog) => (
                    <Blog key={blog.id} title={blog.title}/>
                ))}
            </ul>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
    </React.StrictMode>
)