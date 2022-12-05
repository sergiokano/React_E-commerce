import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductsContext } from '../../../context/ProductsContext/ProductsState'

const Product = () => {
    const {products, product, getProducts, getProduct} = useContext(ProductsContext)
    const { id } = useParams();
    const navigate = useNavigate();

useEffect(()=>{
    getProducts()
    getProduct(id);
}, []);

const onSubmit = (e) => {
    e.preventDefault();
    getProduct(product.id);
    setTimeout(() => {
      navigate("/product");
    }, 1000);
  };

  return (
    <div>Product
    {products?.map((product)=> (
      <div key ={product.id} onSubmit={onSubmit}>
        <p>Product: {product.name}</p>
        <button><Link to={'product/' + product.id}></Link> </button>
        <button onClick={()=>getProduct(product.id)}>Producto</button>
      </div>  
    ))}
    </div>
  )
}

export default Product