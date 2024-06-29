import { assets } from "../../assets/frontend_assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            esse iusto deleniti labore natus et impedit. Nam voluptate
            architecto consequatur quo, quod quibusdam alias nostrum quasi
            molestias debitis, aspernatur ab.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+98-910-500-3119</li>
            <li>Erfansharafi60@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-copy-right">
        Copyright 2024 @ Tomato.com - All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
