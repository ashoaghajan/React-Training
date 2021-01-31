import React from 'react';
import { Link } from 'react-router-dom';

export interface NotFoundProps {
    
}
 
const NotFound: React.SFC<NotFoundProps> = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to ='/'>Back to the home page...</Link>
        </div>
     );
}
 
export default NotFound;
