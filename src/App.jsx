import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import useBlogs from "./hooks/useBlogs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

function App () {
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const postsPerPage = 10
    const { blogs, setBlogs } = useBlogs(page, postsPerPage)
    const queryClient = new QueryClient()
    const { ?, ? } = useQuery({
        queryKey: ['past-orders', page],
        queryFn: () => setBlogs(page, postsPerPage),
        staleTime: 1000000000
    })

    return (
        <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <div>
            {(loading) && (
                <div>
                    Loading...
                </div>
            )}
        </div>
        </QueryClientProvider>
        </React.StrictMode>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <App />
)