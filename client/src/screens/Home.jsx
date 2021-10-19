import axios from 'axios';
import React, { useEffect, useState } from 'react'
import bcg from '../assets/imgs/header.jpg'
import Button from '../components/buttons/button.component';

const Home = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/product/list').then((res) => {
            setAllProducts(res.data)
        })
    }, []);
    console.log(allProducts);
    return (
        <div className=' flex justify-center items-center flex-col' style={{background:`linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${bcg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', height: '105.1vh', width: '100vw', position: 'absolute', top: '0', marginTop: '-50px', zIndex: '-1' }}>
            <div className='text-center  text-white my-5  pt-36 mt-50'>
            <h1 className='text-7xl font-light'>Take away Art!</h1>
            <p className="cursive my-3 text-2xl">art brings joy to life...</p>
            </div>
            <Button isButton={false} title='shop' href='shop'moreStyle='text-white uppercase w-24 md:ml-6 bg-primary text-center'/>
        </div>
    )
}

export default Home
