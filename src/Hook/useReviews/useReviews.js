import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return [reviews, setReview]
};

export default useReviews;
