import { useParams } from "react-router-dom";
import useFetch from "./useFetch"

const BlogDetails = () => {

    const {id }= useParams();
    const { data, error, isPending } = useFetch("http://localhost:8000/blogs/"+id);
 
    return (   
        <div className="blog-BlogDetails">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <div>Written by: {data.author}</div>
                    <div>{data.body} </div>
                </article>
            )}
        </div>

     );
}
 
export default BlogDetails;