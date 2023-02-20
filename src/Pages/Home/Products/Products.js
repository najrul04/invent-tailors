import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600 py-3">Popular Products</p>
                <h2 className="lg:text-5xl md:text-4xl max-sm:text-3xl font-semibold py-3">Browse Our Products</h2>
                <p className='max-sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nesciunt nemo <br /> sed dolores ullam necessitatibus id exercitationem repellendus veritatis iure?</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    products.map(products => <ProductCard
                    key={products._id}
                    products={products}
                    />)
                }
            </div>
        </div>
    );
};


export default Products;