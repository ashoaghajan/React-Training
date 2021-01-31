import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { post_data } from '../api/blogsApi';
import { postUrl } from '../global/globalVariables';

export const useCreate = () => {
    const authors = ['Mario', 'Yoshi', "Luigi"];
    const initBlog = { title: '', body: '', author: authors[0] }
    const [blog, setBlog] = useState(initBlog);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        e.stopPropagation();

        setBlog(currValue => ({
            ...currValue,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const postData = async() => {
            try{
                await post_data(postUrl, blog);
                setLoading(false);
                history.push('/');
            }
            catch(err){
                console.log(err)
            }
        }

        setTimeout(() => postData(), 500);
    }

    return { handleChange, handleSubmit, blog, authors, loading }
}