import React, { use } from 'react';

const LatestProducts = ({latestProductsPromise}) => {
    const products = use(latestProductsPromise)
    console.log(products);
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-15 mb-10'>Recent <span className='text-primary'>Products</span></h1>
            
        </div>
    );
};

export default LatestProducts;