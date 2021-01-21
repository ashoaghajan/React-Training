import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export interface BlogDetailsProps { 

}
 
const BlogDetails: React.SFC<BlogDetailsProps> = () => {

    const params: any = useParams();
    const { id } = params;
    const { error, loading, data: blog }: BlogFetchData = useFetch(`http://localhost:8000/blogs/${id}`);


    return ( 
        <div className="blog-details">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
