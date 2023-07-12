import { Copyright } from "./components/copyright";
import { FooterLinks } from "./components/footerLinks";
import { FourBanner } from "./components/fourBanner";
import "./styles.scss";
import footerSlogan from "../../assets/icons/footer-slogan.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-up">
           <div className="footer-slogan">
            <img src={footerSlogan} alt="" />
           </div>
          <FourBanner />
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};
