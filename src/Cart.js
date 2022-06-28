
import NoHomeNavBar from "./NoHomeNavBar";
import useFetch from "./useFetch";
import CartList from "./CartList";

const Cart = () => {
    const { data: productsInCart, isPending, error } = useFetch('http://localhost:8800/cart');

    return (
        <div>
            <NoHomeNavBar />
            <section className="section products-section check-products container">
                <h2 className="attire-txt">Please your stomach, please your mind.</h2>
    
                {error && <div>{ error }</div>}
                {isPending && <div>Loading...</div>}
                {productsInCart && <CartList productsInCart={ productsInCart }/>}
    
                <div className="attire-n-action">
                    <h2 className="attire-txt">Hot and ready to serve.</h2>
                    <button className="btn check_out-btn">Checkout</button>
                </div>
            </section>
        </div>
     );
}
 
export default Cart;
