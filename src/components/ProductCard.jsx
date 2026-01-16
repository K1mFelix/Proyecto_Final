import "./ProductCard.css";

function ProductCard({name, price, description, image}){ //funcion que llama al componente ProductCard desde el json "products.js"
    return(
        <div className="card">
            <img src={image} alt={name} className="card-img"/> 
            
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="description">{description}</p>
                <p className="price">${price}</p>
{/*toca mejorar el Estilo.*/}
                <button><h3 style={{ color: 'black' }}>Agregar al carrito</h3></button>

        </div>
    </div>
    );
}

export default ProductCard;