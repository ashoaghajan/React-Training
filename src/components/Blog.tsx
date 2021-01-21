import React from 'react';

export interface BlogProps {
    blog: Blog,
}
 
const Blog: React.SFC<BlogProps> = ({ blog }) => {



    return ( 
        <div className="blog-preview">
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
        </div>
     );
}
 
export default Blog;
