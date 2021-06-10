import { useEffect, useState } from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data} = useFetch('http://localhost:8000/blogs')
    
    // const handleDelete = (id)=>{
    //     const newBlogs = blogs.filter(blog => blog.id != id);
    //     setBlogs(newBlogs);
    // }

    return (
        <div className="home">

            {/* Error Message */}
            {error && <div>{error}</div>}

            {/* adding a loading using conditional statements*/}
            {isPending && <div>Loading...</div>}

            {/* This works because blogs is checked first and if it returns false (null) then it wont run */}
            {/* But we have a usestate which re renders the window when the blogs is no loner null */}
            {data && <BlogList blogs={data} />}
        </div>
    );
};

export default Home;
