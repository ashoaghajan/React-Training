import React from 'react';
import { Link } from 'react-router-dom';

export interface BlogProps {
    blog: Blog,
}
 
const Blog: React.SFC<BlogProps> = ({ blog }) => {

    return ( 
        <div className="blog-preview">
            <Link to={`/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </Link>
        </div>
     );
}
 
export default Blog;
