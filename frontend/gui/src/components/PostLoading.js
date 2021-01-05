import React from 'react';

const PostLoading = (Component) => {
    return function PostLoadingComponent({ isLoading, ...props }) {
        if(!isLoading) return <Component {...props} />;
        return(
            <p style={{ fonstSize:'25px' }}>
                We are waiting for data to load..!!
            </p>
        );
    }
}

export default PostLoading;