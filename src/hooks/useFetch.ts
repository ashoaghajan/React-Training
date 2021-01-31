import { useState, useEffect } from 'react';
import { get_data, cancel_req } from '../api/blogsApi';

export const useFetch = (url: string) => {
    const [data, setData]: [any, React.Dispatch<React.SetStateAction<any>>] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async() => {
            try{
                const data = await get_data(url)
                setData(data);
                setLoading(false);
                setError('');
            }
            catch(error){
                if(error.message.includes('404')){
                    setError('Could not fetch the data for that resource.');
                    setLoading(false);
                }
                else if(error.message === 'axios request cancelled'){
                    console.log(error.message);
                }
                else{
                    setError(error.message);
                    setLoading(false);
                }
            }
        }

        setTimeout(() => getData(), 500);

        return () => cancel_req();
        // eslint-disable-next-line
    },[]);

    return { error, loading, data }
}