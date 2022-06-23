
import { Link } from 'react-router-dom';

const ProductList = ({products}) => {
    return ( 
        <section className="section products-section container">
            <h2 className="section-title">The best slice at the best price.</h2>
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={ product.id }>
                        <img data-src={ product.image } alt={ product.name } className="lazy"></img>
                        <div className="info">
                            <div className="name-price">
                                <h3 className="name">{ product.name }</h3>
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

            <div className="home-banner">
                <div className="sec-call-to-action_container">
                    <h5 className="sec-call-to-action-text">Try our pie and give joy to your stomach with tastiest Pizza ever</h5>
                    <Link to="/products"><button className="btn sec-call-to-action-btn white-bd">See more products</button></Link>
                </div>
                <img data-src="assets/images/home_banner.webp" alt="" className="home-banner-img lazy"></img>
            </div>
        </section>
     );
}
 
export default ProductList;
