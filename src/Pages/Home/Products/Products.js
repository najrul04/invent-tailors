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
            <div className='text-center mb-4 pt-10'>
                <p className="text-2xl font-bold text-orange-600">Popular Products</p>
                <h2 className="lg:text-5xl md:text-4xl max-sm:text-3xl font-semibold pt-5">Browse Our Products</h2>
                <p className="text-lg max-sm:text-sm pt-5 font-semibold">Providing Services such as Suit, Shirt, Pant, Panjabi, Trousers and others for 31 years.
                <br />
                Customized services are the one where we shine.
                </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 pt-5'>
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