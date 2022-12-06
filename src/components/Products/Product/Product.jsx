import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductsContext } from '../../../context/ProductsContext/ProductsState'

const Product = () => {
    const { id } = useParams();
    // const navigate = useNavigate();
    const { product, getProduct } = useContext(ProductsContext)

    useEffect(() => {
        // getProducts()
        getProduct(id);
    }, []);

    return (
        <p>{product.name}</p>
 
  )
}

export default Product