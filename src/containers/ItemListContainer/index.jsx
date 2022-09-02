import React from "react";
import "./styles.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className="titulo">{greeting}</h1>
    </div>
  )
}

export default ItemListContainer;