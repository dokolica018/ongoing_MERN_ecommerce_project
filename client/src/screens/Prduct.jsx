import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = ({ product }) => {

    return (
<div className="max-w-lg animate col-span-1">
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
            <img className="rounded-t-lg w-full slika" src={`http://localhost:5000/api/product/photo/${product._id}`} alt=""/>
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{product.name}</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">{product.description}</p>
            <a className="text-white bg-yellow-500 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center" href="#">Buy</a>
        </div>
    </div>
</div>
    );
}

export default Product;