import React from 'react';
import BlogList from './BlogList';
import { useFetch } from '../hooks/useFetch';
import { postUrl } from '../global/globalVariables';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {

    const { error, loading, data: blogs } = useFetch(postUrl);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        </div>
     );
}
 
export default Home;
