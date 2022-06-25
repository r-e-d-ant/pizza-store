
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import useFetch from "./useFetch";
import ProductList from "./ProductList";

const Home = () => {

    const { data: products, isPending, error } = useFetch('http://localhost:8800/pizzas');

    return (
        <main>
            <section className="section hero-section container">
                <NavBar />
                <div className="hero-stuffs">
                    <h1 className="hero-slogan choco-bg white-clr">Quick, fresh and delicious pizza for you.</h1>
                    <div className="hero-sub-slogan-container">
                        <h2 className="hero-sub-slogan choco-bg white-clr">You can’t buy happiness but you can</h2>
                        <h2 className="hero-sub-slogan choco-bg white-clr">buy Pizza and that’s kind of the</h2>
                        <h2 className="hero-sub-slogan choco-bg white-clr">same thing</h2>
                    </div>
                    <div className="call-to-action-container">
                        <h3 className="white-clr">Try our pie</h3>
                        <img src="assets/images/pizza_arrow.svg" className="pizza-arrow image" alt=""></img>
                        <Link to="/products"><button className="call-to-action-btn btn white-bd">Order now</button></Link>
                    </div>
                </div>
    
                <div className="social-medias">
                    <i className='bx bxl-instagram-alt'></i>
                    <i className='bx bxl-facebook'></i>
                </div>
            </section>
            <section className="section products-section container">
                {error && <div>{ error }</div>}
                {isPending && <div>Loading...</div>}
                {products && <ProductList products={ products } />}
                <div className="home-banner">
                    <div className="sec-call-to-action_container">
                        <h5 className="sec-call-to-action-text">Try our pie and give joy to your stomach with tastiest Pizza ever</h5>
                        <Link to="/products"><button className="btn sec-call-to-action-btn white-bd">See more products</button></Link>
                    </div>
                    <img data-src="assets/images/home_banner.webp" alt="" className="home-banner-img lazy"></img>
                </div>
            </section>
        </main>
    );
}
 
export default Home;
