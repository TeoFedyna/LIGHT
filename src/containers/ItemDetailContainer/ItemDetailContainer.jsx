import React from 'react'
import { useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = ({})

    useEffect (() => {
        const getProducts = async () =>{
            try {
                const response = await fetch(/*link de la api en "sting"*/);
                const data = response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts()
    }, [])

    //console.log(productDetail);

    return <ItemDetail prduct={productDetail} alt="product-item"/>
};

export default ItemDetailContainer