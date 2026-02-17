import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Runiverse logo" className="footer__logo" />
            <p className="footer__text"> Runiverse © 2026 • Made with React & Redux</p>
        </footer>
    );
};

export default Footer;