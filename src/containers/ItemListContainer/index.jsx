import React, { useEffect } from "react";
import "./styles.css";
import { products } from "../../data/productos";
import { useState } from 'react';
import ItemList from "../../components/ItemList";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
  
    (async () => {
      const obtenerProductos = new Promise((accept, reject) => {
        setTimeout(() => {
          accept(products) 
        }, 3000);
      })
    
      try {
        const productos = await obtenerProductos;
        setProductos(productos)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])
  
  console.log(productos);

  return (
    <div>
      {/* <h1 className="titulo">{greeting}</h1> */}
      <ItemList products={productos}/>
    </div>
  )
} 

export default ItemListContainer;