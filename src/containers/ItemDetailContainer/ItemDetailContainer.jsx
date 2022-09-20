import React from 'react'
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams()
    console.log(productId);

    useEffect (() => {
        const getProducts = async () =>{
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts()
    }, [productId])

    console.log(productDetail);

    return /*<div>pepe</div>*/ <ItemDetail product={productDetail} alt="product-item"/>
};

export default ItemDetailContainer;