const Footer = () => {
    return ( 
        <footer>
            <div className="upper-footer white-clr container">
                <div className="address">
                    <h5>Address</h5>
                    <ul className="footer-nav-items">
                        <li className="footer-nav-item">Mukaza</li>
                        <li className="footer-nav-item">Nyak. 2 , 12 av no 23</li>
                        <li className="footer-nav-item">222535242</li>
                        <li className="footer-nav-item">example@domain.com</li>
                    </ul>
                    <div className="footer-social-medias">
                        <i className='bx bxl-instagram-alt'></i>
                        <i className='bx bxl-facebook'></i>
                    </div>
                </div>
        
                <div className="footer-logo"><img src="assets/images/logo.svg" alt=""></img></div>
            </div>
            <div className="lower-footer container">
                <p className="copyright white-clr">copyright © 2022 πzza</p>
                <p className="developer white-clr">Developed by <a href="https://thierrymugisha.netlify.app/">Thierry M.</a></p>
            </div>
        </footer>
     );
}
 
export default Footer;