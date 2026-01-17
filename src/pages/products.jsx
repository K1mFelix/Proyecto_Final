import {useState} from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import "./Products.css";

function Products(){
  const [cart, setCart] = useState([]);

  //agregar producto al carrito
  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart){
      setCart(
        cart.map((item) =>
        item.id === product.id
      ? { ...item, quantity: item.quantity +1}
      : item
        )
      );
    } else {
      setCart([... cart, { ...product, quantity: 1}]);
    }
  };

  //eliminar un producto
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //incrementar cantidad productos en carro
  const increaseQuantity =(id) => {
  setCart(
    cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1}
        : item
    )
  );
};

//decrementar cantidad productos en carro
const decreaseQuantity = (id) => {
  setCart(
    cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1}
          : item
      )
      .filter((item) => item.quantity > 0) //si la cantidad baja a 0 el producto se elimina
  );
};

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Cart 
        cart={cart} 
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        />
    </div>
  );
}

{/*
  function Products() {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
  */}

export default Products;
