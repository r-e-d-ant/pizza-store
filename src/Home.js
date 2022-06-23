
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";

const Home = () => {
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
        </main>
    );
}
 
export default Home;
