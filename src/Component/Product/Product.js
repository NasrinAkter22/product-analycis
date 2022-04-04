import React from 'react';

const Product = () => {
    return (
        <div className='p-5'>
            <div className="container">
                <div className="row row-cols-md-2 justify-content-center align-items-center">
                    <div>
                        <img src="https://img.freepik.com/free-psd/computer-laptop-screen-mockup-psd-digital-device-with-botanical-wallpaper_53876-130134.jpg?w=740" className='img-fluid' alt="" />
                    </div>
                    <div>
                        <div>
                            <h2>2021 Apple MacBook Pro</h2>
                            <p>Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance
                                Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever
                                Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games
                                16-core Neural Engine for up to 5x faster machine learning performance
                                Longer battery life, up to 21 hours
                                Up to 64GB of unified memory so everything you do is fast and fluid
                                Up to 8TB of superfast SSD storage launches apps and opens files in an instant</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;