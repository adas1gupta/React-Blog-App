import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

function App () {
    const [blogs, setBlogs] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const postsPerPage = 10

    return (
        <div>
            {(loading) && (
                <div>
                    Loading...
                </div>
            )}
        </div>
    )

}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)