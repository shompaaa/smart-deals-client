import React from 'react';
import { useLoaderData } from 'react-router';
import Product from '../Product/Product';

const AllProducts = () => {
    const allProduct = useLoaderData()
//   const {_id,image, title, price_min, price_max } = allProduct;
    return (
        <div className='p-20'>
            <h1 className='text-4xl text-center font-bold mb-10'>All <span className='text-primary'>Products</span></h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                allProduct.map(product=><Product product={product}></Product>)
            }
        </div>
         </div>
    );
};

export default AllProducts;