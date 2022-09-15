import React from 'react'
import { useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    useEffect (() => {
        const getProducts = async () =>{
            try {
                const response = await fetch("https://fakestoreapi.com/products/1");
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts()
    }, [])

    console.log(productDetail);

    return /*<div>pepe</div>*/ <ItemDetail product={productDetail} alt="product-item"/>
};

export default ItemDetailContainer;