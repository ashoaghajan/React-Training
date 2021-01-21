import React, { useState, useEffect } from 'react';
import { get_data } from '../api/blogsApi';

export const useFetch = (url: string) => {
    const [data, setData]: [Blog[], React.Dispatch<React.SetStateAction<never[]>>] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async() => {
            try{
                const data = await get_data(url);
                setData(data);
                setLoading(false);
                setError('');
            }
            catch(error){
                if(error.message.includes('404')){
                    setError('Could not fetch the data for that resource.');
                }
                else{
                    setError(error.message);
                }
                setLoading(false);
            }
        }

        setTimeout(() => getData(), 1000)
        // eslint-disable-next-line
    },[]);

    return { error, loading, data }
}