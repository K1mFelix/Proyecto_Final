import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

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

export default Products;
