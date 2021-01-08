import React from 'react';

const Posts = (props) => {
    const { posts } = props;

    if(!posts || posts.length === 0) return <p>Can not find any posts, sorry!</p>;

    const dateFormat = (date) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString([],options);
    }

    return(
        <div>
            {posts.map((post) =>{
                return(
                    <div key={post.id}>
                        <li>
                            <p>Company: {post.company_name}</p>
                            <p>Role: {post.role}</p>
                            <p>Date Applied: {dateFormat(post.date_applied)}</p>
                            <p>Status: {post.status}</p>
                            <br />
                        </li>
                    </div>
                );
            })}
        </div>
    );
}

export default Posts;