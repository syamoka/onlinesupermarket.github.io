import "./styles.scss";

import { Urls } from "../../../../../../pages/urls";

export const ForgottenPassword = () => {
  const breadcrumbs = [
    {
      id: 1,
      name: "Գլխավոր էջ",
      path: "/",
      img: "https://supermarket.am/images/bread_right.svg"
    },
    {
      id: 2,
      name: "Անձնական էջ",
      path: "/registration"
    }
  ]

  return (
    <div className="forgotten-password">
      <Urls data={breadcrumbs} />

      <div className="forgotten-password-section">
        <div>
          Եթե մոռացել եք Ձեր գաղտնաբառը, ապա մուտքագրեք Ձեր էլ. փոստի հասցեն և
          սեղմեք «Վերականգնել»: Դրանից հետո կստանաք նամակ, որում ներառված հղումը
          սեղմելով կարող եք շարունակել գաղտնաբառի վերականգնումը
        </div>
        <div className="forgotten-email">
          <label htmlFor="">Էլ. փոստ</label>
          <input type="text" autoComplete="off" />
        </div>

        <button>Վերականգնել</button>
      </div>
    </div>
  );
};
