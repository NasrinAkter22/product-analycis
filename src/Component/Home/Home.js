import React from 'react';
import useReviews from '../../Hook/useReviews/useReviews';
import Product from '../Product/Product';
import Review from '../Review/Review';

const Home = () => {
    const [reviews] = useReviews()

    return (
        <div>
            <Product />
            <div className='container p-5'>
                <h1 className='text-center pt-5 pb-2'>Reviews</h1>
                <div className='row row-cols-md-3 g-4'>
                    {
                        reviews.slice(0, 3).map(reviews => <Review
                            reviewUser={reviews}
                        >
                        </Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;