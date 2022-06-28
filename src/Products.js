
import NoHomeNavBar from "./NoHomeNavBar";
import useFetch from "./useFetch";
import ProductList from "./ProductList";

const Products = () => {
    const { data: products, isPending, error } = useFetch('http://localhost:8800/pizzas');

    return (
        <div>
            <NoHomeNavBar />
            <section className="section search-section container">
                <h2 className="attire-txt">Happy stomach fresh mind.</h2>
                <form>
                    <div className="form-control">
                        <input type="search"></input>
                        <button type="submit" className="btn">Search</button>
                    </div>
                </form>
            </section>

            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}

            <section className="section products-section container">
                <div className="products products-page">
                    {products && <ProductList products={ products } />}
                </div>
                <div className="home-banner">
                    <img src="assets/images/products_banner.webp" alt="" className="home-banner-img lazy"></img>
                </div>
                <section className="section products-section">
                    {/* {products && <ProductList products={ products } />} */}
                </section>
            </section>
        </div>
     );
}
 
export default Products;