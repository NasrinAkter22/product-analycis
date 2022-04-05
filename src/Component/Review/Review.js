import React from 'react';

const Review = ({ reviewUser }) => {
    console.log(reviewUser);
    const { name, rating, review } = reviewUser
    return (
        <div>
            <div className='shadow-sm bg-light text-center p-4'>
                <h3>{name}</h3>
                <h6>rating  {rating}</h6>
                <p>{review.slice(0, 80)}...</p>
            </div>
        </div>
    );
};

export default Review;