function Blog ({title}) {
    return (
        <div>
            <li>{title}</li>
            <Link to={`/post/${id}`}>
                <button>More Information</button>
            </Link>
        </div>
    )
}

export default Blog;