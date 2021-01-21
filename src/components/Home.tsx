import React from 'react';
import BlogList from './BlogList';
import { useFetch } from '../hooks/useFetch';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {

    const { error, loading, data: blogs } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        </div>
     );
}
 
export default Home;
