import "./styles.scss";

import { TopNav } from "../topnav";
import { Urls } from "../urls";

export const Abroad = () => {

  const breadcrumbs = [
    {
      id: 1, 
      name: "Գլխավոր էջ",
      path: "/",
      img: "https://supermarket.am/images/bread_right.svg"
    },
    {
      id: 2,
      name: "Գնումներ արտերկրից",
      path: "/abroad"
    }
  ]

  return (
    <div className="abroad-page">
      <TopNav />

      <div className="abroad-overflow">
        <Urls data={breadcrumbs} />

        <h1 className="abroad-title">Գնումներ արտերկրից</h1>

        <p className="abroad-text">
          Supermarket.am -ը հնարավորություն է տալիս աշխարհի տարբեր երկրներում
          բնակվող հայերին Հայաստանի իրենց հարազատների և ընկերների համար կատարել
          գնումներ ինտերնետի միջոցով:
        </p>

        <p className="abroad-text">
          Ընտրություն կատարելով մեր կայքում ներկայացված ապրանքներից` դրանք
          այնուհետև կարող եք պատվիրել Ձեր մտերիմների համար` վճարելով Master
          Card, Visa քարտերով, ինչպես նաև IDram և Telcell համակարգերի միջոցով:
          Առաքումն իրականացվում է Ձեր ընտրած օրը և ժամին:
        </p>

        <p className="abroad-text">
          Ի դեպ, ապրանքների գները կարող եք տեսնել ինչպես հայկական դրամով, այնպես
          էլ եվրոյով, ԱՄՆ դոլարով և ռուսական ռուբլիով:
        </p>

        <p className="abroad-text">
          Հարցերի դեպքում Ձեզ սիրով կպատասխանեն մեր «Զանգերի կենտրոն»-ի
          օպերատորները, որոնց հետ կարելի է կապվել +37411555555 հեռախոսահամարի
          (սպասարկման որակը բարելավելու նպատակով, զանգը կարող է ձայնագրվել):
        </p>
      </div>
    </div>
  );
};
