
import { useNavigate, useParams } from "react-router-dom";
import NoHomeNavBar from "./NoHomeNavBar";
import useFetch from "./useFetch";
import ProductList from "./ProductList";
import { useState } from "react";

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, isPending: pending, error: isError } = useFetch(`http://localhost:8800/pizzas/${id}`);
    const { data: similarProducts, isPending, error } = useFetch('http://localhost:8800/pizzas');

    const [isAdding, setIsAdding] = useState(false);

    const navigate = useNavigate();

    const addToCart = () => {
        const toAddproduct = { id : product.id, image: product.image, name: product.name, price: product.price, toppings: product.toppings };

        setIsAdding(true);

        fetch('http://localhost:8800/cart', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toAddproduct)
        }).then(() => {
            console.log("new product added to cart")
            setIsAdding(false)
            navigate("/cart");
        }).catch((err) => {
            console.log(err.message);
        })
    };

    return ( 
        <div>
            <NoHomeNavBar />

            { isError && <div>{ isError }</div>}
            { pending && <div>Loading...</div>}
            { product && (
                <section className="section product-details-section container">
                    <img src={product.image} alt={product.name} className="product-det-image"></img>
                    <div className="product-details">
                        <h2 className="det-name">{product.name}</h2>
                        <p className="det-desc">{ product.description }</p>
                        <div className="toppings">
                        {product.toppings.map((topping, index) => (
                            <div className="topping" key={index}><h4>{topping}</h4></div>
                        ))}
                        </div>
                        <div className="actions">
                            <div className="quantity">
                                <i className='bx bxs-minus-circle'></i>
                                <div className="qty-cont"><span>1</span></div>
                                <i className='bx bxs-plus-circle'></i>
                            </div>
                            {isAdding && <button className="btn add-to-cart-btn" disabled>Adding...</button> }
                            {!isAdding && <button className="btn add-to-cart-btn" onClick={addToCart}>Add to cart</button> }
                        </div>
                    </div>
                </section>
            )}
            <section className="section products-section container">
                <h2 className="section-title">Similar products</h2>
                {error && <div>{ error }</div>}
                {isPending && <div>Loading...</div>}
                {similarProducts && <ProductList products={ similarProducts.filter((sP) => sP.id !== parseInt(id)).slice(0, 3) } />}
            </section>
        </div>
     );
}
 
export default ProductDetails;