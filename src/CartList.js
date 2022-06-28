
const CartList = ({ productsInCart }) => {
    return ( 
        <div className="products check-products">
            {productsInCart.map((productInCart) => (
                <div className="product" key={ productInCart.id }>
                    <img data-src={ productInCart.image } alt={ productInCart.name } className="lazy"></img>
                    <div className="info">
                        <div className="name-price">
                            <h3 className="name">{ productInCart.name }</h3>
                            <h3 className="price">{ productInCart.price }</h3>
                        </div>
                        <div className="toppings">
                            {productInCart.toppings.map((topping, index) => (
                                <div className="topping" key={index}><h4>{topping}</h4></div>
                            ))}
                        </div>
                        <div className="actions">
                            <div className="quantity">
                                <i className='bx bxs-minus-circle'></i>
                                <div className="qty-cont"><span>1</span></div>
                                <i className='bx bxs-plus-circle'></i>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default CartList;