import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import useBlogs from "./hooks/useBlogs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()

function App () {
    const [page, setPage] = useState(1)
    const postsPerPage = 10

    const { blogs } = useBlogs(page, postsPerPage)

    return (
        <div>
            <ul>
                {blogs.data.map((blog) => (
                    <li key={blog.id}>{blog.title}</li>
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