
import { Link, useLocation } from "react-router-dom";

const ProductList = ({ products }) => {

    const location = useLocation();
    const homeProducts = products.slice(0, 3);

    return ( 
        <div className="products">
            {products.map((product) => (
                <div className="product" key={ product.id }>
                    <Link to={`/products/${product.id}`}><img src={ product.image } alt={ product.name } className="productImg" loading="lazy"></img></Link>
                    <div className="info">
                        <div className="name-price">
                        <Link to={`/products/${product.id}`}><h3 className="name">{ product.name }</h3></Link>
                            <h3 className="price">{ product.price }</h3>
                        </div>
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
                </div>
            ))}
        </div>
     );
}
 
export default ProductList;
