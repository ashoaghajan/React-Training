import React from 'react';
import { useCreate } from '../hooks/useCreate';

export interface CreateProps {
    
}
 
const Create: React.SFC<CreateProps> = () => {
    
   const { handleChange, handleSubmit, blog, authors, loading } = useCreate();

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" id='title' value={blog.title} onChange={handleChange} required/>
                <label>Blog Body</label>
                <textarea id='body' value={blog.body} required onChange={handleChange}></textarea>
                <label>Blog Author</label>
                <select id='author' value={blog.author} onChange={handleChange}>
                    {authors.map((author, index) => (
                        <option key={index} value={author}>{author}</option>
                    ))}
                </select> 
                {!loading ? <button type='submit'>Add Blog</button> : (
                    <button disabled>Adding Blog...</button>
                )}  
            </form>
        </div>
     );
}
 
export default Create;
