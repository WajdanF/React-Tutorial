const BlogList = (props) => {
    //This can also be imported as {blogs, handleDelete} rather than doing props.
    const blogs = props.blogs;
    return (
        <div className="blog-list">
            {blogs.map( blog => ( //here map has paratesis and not curly-brackets because we want to return a jsx template
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        <button >Delete Blog</button>
                    </div>
                )
            )}
        </div>
    );
};
 
export default BlogList;