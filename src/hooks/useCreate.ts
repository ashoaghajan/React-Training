import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { post_data } from '../api/blogsApi';

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
            await post_data('http://localhost:8000/blogs', blog);
            setLoading(false);
            history.push('/');
        }

        setTimeout(() => postData(), 1000);
    }

    return { handleChange, handleSubmit, blog, authors, loading }
}