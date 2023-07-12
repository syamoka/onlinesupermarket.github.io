import "./styles.scss";
import whatsupIcon from "../../../../assets/icons/whatsapp.svg";
import viberIcon from "../../../../assets/icons/viberIcon.svg";
import { Copyright } from "../copyright";
import { footerLinksTitles } from './../../../../pages/home/components/productSlider/productSliderSlice';
import { useSelector } from 'react-redux';

export const FooterLinks = () => {
  const footerLinksData = useSelector(footerLinksTitles)

  // console.log( footerLinksTitles)

  const footerLinks = [
    {
      id: 1,
      title: "Supermarket.am-ի մասին",
      page: "/about",
    },

    {
      id: 2,
      title: "Թափուր աշխատատեղեր",
      page: "/vacancy",
    },

    {
      id: 3,
      title: "Հաճախորդների կարծիքներ",
      page: "/feedback",
    },

    {
      id: 4,
      title: "Կորպորատիվ հաճախորդներին",
      page: "/corporateclients",
    },

    {
      id: 5,
      title: "Օգտագործողի ուղեցույց",
      page: "/userGuide",
    },

    {
      id: 6,
      title: "Հաճախակի տրվող հարցեր",
      page: "/FAQ",
    },

    {
      id: 7,
      title: "Առաքում և վճարում",
      page: "/deliveryPayment",
    },

    {
      id: 8,
      title: "Գնումներ արտերկրից",
      page: "/abroad",
    }
  ]

  const footerLinksRight = [
    {
      id: 1,
      title: "Մեր կոնտակտները",
      phone: "+374 11 555 555",
      page: "abroad",
    },

    {
      id: 2,
      title: "Մենք կապի մեջ ենք",
      phone1: whatsupIcon,
      phone2: viberIcon,
      page: "abroad",
    },
  ];

  const respData = [
    {
      id: 1,
      title: "Առաքում և վճարում",
      page: "/deliveryPayment",
    },

    {
      id: 2,
      title: "Գնումներ արտերկրից",
      page: "/abroad",
    },

    {
      id: 3,
      title: "Կորպորատիվ հաճախորդներին",
      page: "#",
    },
  ];

  return (
    <div className="footer-block-container">
      <div className="footer-block">
        <div className="footer-menu">
          <ul className="footer-links">
            {footerLinks.map((el) => {
              return (
                <li key={el.id}>
                  <a href={el.page} className="footer-alinks">
                    <span>{el.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer-resp">
          <div className="footer-right-parent">
            {footerLinksRight.map((el) => {
              return (
                <div className="footer-right-links-parent">
                  <div className="footer-right-links">
                    <li className="footer-menu-phone" key={el.id}>
                      <span className="footer-my-contact">{el.title}</span>
                      <a href="tel:+37411555555" className="footer-links-phone">
                        {el.phone}
                      </a>
                      <span className=" footer-links-social">
                        <img src={el.phone1} alt="" />
                        <img src={el.phone2} alt="" />
                      </span>
                    </li>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="footer-banner">
            <div className="footer-banner-logo"></div>
            <div className="footer-banner-phone"></div>
            <a
              href="https://play.google.com/store/apps/details?id=am.supermarket&hl=ru"
              className="footer-banner-android"
            >
              <img src="" alt="" />
            </a>
            <a
              href="https://apps.apple.com/app/id1522276028"
              className="footer-banner-ios"
            ></a>
          </div>
        </div>

        <div className="footer-menu-resp">
          {respData.map((item) => {
            return (
              <li key={item.id}>
                <a href="">{item.title}</a>
              </li>
            );
          })}
        </div>
      </div>

      <Copyright />
    </div>
  );
};
