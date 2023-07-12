
import whatsappIcon from "../../../../../../assets/icons/whatsappGreen.png";
import viberIcon from "../../../../../../assets/icons/viberIconn.svg";

export const TopPhoneDropping = () => {
  return (
    <div className="top-phone-dropping">
      <a href="tel:011 555 555">011 555 555</a>
      <a href="https://api.whatsapp.com/send?phone=37433533555">
        <img src={whatsappIcon} alt="" />
        WhatsApp
      </a>
      <a href="viber://chat?number=%2B37433533555">
        <img src={viberIcon} alt="" />
        Viber
      </a>
    </div>
  );
};
