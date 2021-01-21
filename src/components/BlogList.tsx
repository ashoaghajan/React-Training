import React from 'react';
import Blog from './Blog';

export interface BlogListProps {
    blogs: Blog[],
    title: string,
}
 
const BlogList: React.SFC<BlogListProps> = ({ blogs, title }) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <Blog key={blog.id} blog={blog}/>
            ))}
        </div>
     );
}
 
export default BlogList;
