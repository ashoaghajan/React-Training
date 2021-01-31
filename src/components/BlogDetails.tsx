import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { postUrl } from '../global/globalVariables';
import { delete_data } from '../api/blogsApi';

export interface BlogDetailsProps { 

}
 
const BlogDetails: React.SFC<BlogDetailsProps> = () => {

    const params: any = useParams();
    const history = useHistory();
    const { id } = params;
    const [deleting, setDeleting] = useState(false);
    const { error, loading, data: blog }: BlogFetchData = useFetch(`${postUrl}/${id}`);

    const handleDelete = () => {
        setDeleting(true);

        const deleteData = async() => {
            try{
                await delete_data(postUrl, blog.id);
                setDeleting(false);
                history.push('/');
            }
            catch(err){
                console.log(err)
            }
        }

        setTimeout(() => deleteData(), 500);
    }

    return ( 
        <div className="blog-details">
            {loading && <div>Loading...</div>}
            {deleting && <div>Deleting...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
