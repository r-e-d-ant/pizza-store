
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
    const [qty, setQty] = useState(1);

    const increaseQty = () => {
        setQty(qty + 1);
    };
    const decreaseseQty = () => {
        if(qty > 1) {
            setQty(qty - 1);
        }
    };

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
                                <i className='bx bxs-minus-circle' onClick={decreaseseQty}></i>
                                <div className="qty-cont"><span>{ qty }</span></div>
                                <i className='bx bxs-plus-circle' onClick={increaseQty}></i>
                            </div>
                            <Link to={`/products/${product.id}`}><button className="btn add-to-cart-btn">Add to cart</button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default ProductList;
