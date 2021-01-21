import React from 'react';
import BlogList from './BlogList';
import { useFetch } from '../hooks/useFetch';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {

    const { error, loading, data } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {data.length ? <BlogList blogs={data} title='All Blogs'/> : null}
        </div>
     );
}
 
export default Home;
