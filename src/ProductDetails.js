
import { useParams } from "react-router-dom";
import NoHomeNavBar from "./NoHomeNavBar";
import useFetch from "./useFetch";
import ProductList from "./ProductList";

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, isPending: pending, error: isError } = useFetch(`http://localhost:8800/pizzas/${id}`);
    const { data: similarProducts, isPending, error } = useFetch('http://localhost:8800/pizzas');

    return ( 
        <div>
            <NoHomeNavBar />

            { isError && <div>{ isError }</div>}
            { pending && <div>Loading...</div>}

            <section className="section product-details-section container">
                <img src="assets/images/product3.webp" alt="" className="product-det-image"></img>
                { product && (
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
                            <button className="btn add-to-cart-btn">Add to cart</button>
                        </div>
                    </div>
                )}
            </section>
            <section className="section products-section container">
                <h2 className="section-title">Similar products</h2>
                {error && <div>{ error }</div>}
                {isPending && <div>Loading...</div>}
                {similarProducts && <ProductList products={ similarProducts } />}
            </section>
        </div>
     );
}
 
export default ProductDetails;