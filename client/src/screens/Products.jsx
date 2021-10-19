import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from '../components/container/container.component';
import Product from './Prduct';

const Products = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/product/list').then((res) => {
            setAllProducts(res.data)
        })
    }, []);
    return (
        <Container>
            <div className=' w-4/5 mx-auto py-5 my-10 grid grid-cols-4 grid-rows-2 gap-8'>
                {allProducts.map(product => <Product key={product._id} product={product} />)}
            </div>
        </Container>
    );
}

export default Products;