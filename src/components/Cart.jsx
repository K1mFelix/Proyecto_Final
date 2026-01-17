function Cart({cart, removeFromCart, increaseQuantity, decreaseQuantity}){
    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    );

    return (
        <div style={{minWidth: "300px", padding: "20px", borderLeft: "1px solid #addd" }}>
            <h2>Carrito</h2>         

            {cart.length === 0 && <p>El carrito está vacío</p>}

            {cart.map((item) =>(
                <div key={item.id} style={{ marginBottom: "15px"}}>
                    <p>
                        <strong>{item.name}</strong> x {item.quantity}
                    </p>

                    <div style={{ display: "flex", gap: "10px", alignItems: "center"}}>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>

                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>

                    <p>Subtotal: ${item.price * item.quantity}</p>

                    <button onClick={() => removeFromCart(item.id)}>
                        Eliminar
                    </button>
                    </div>
            ))}

            <hr />
            <h3>Total: ${total}</h3>
        </div>
    );
}

export default Cart;