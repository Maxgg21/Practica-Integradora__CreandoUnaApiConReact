import React from 'react';
import Footer from './Footer';
import ContentRowTop from './ContentRowTop';


export const ConterWrapper = () => {
    return (
        <div>
            <div id='content'>
                <ContentRowTop />    
            </div>
            <Footer />
        </div> 
    )
}

export default ConterWrapper;