import React from 'react';
import useReviews from '../../Hook/useReviews/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <div>
            <div className="container">
                <h1 className='text-center pt-5'>All reviews</h1>
                <div className='row row-cols-md-3 mt-2 g-4'>
                    {
                        reviews.map(reviews => <Review
                            reviewUser={reviews}
                        >
                        </Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;