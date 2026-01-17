import {useState, useEffect} from "react"; //se agrega useEffect 
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import "./Products.css";

//Se limpia código de products debido a que ya no maneja estados por acceso global al contexto de CartContext
function Products(){
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <Cart/>
    </div>
  );
}

export default Products;
