import "./styles.scss";

import { TopNav } from "../topnav";
import { Urls } from "../urls";

export const Feedback = () => {

  const breadcrumbs = [
    {
      id: 1, 
      name: "Գլխավոր էջ",
      path: "/",
      img: "https://supermarket.am/images/bread_right.svg"
    },
    {
      id: 2,
      name: "Հաճախորդների կարծիքներ",
      path: "/feedback"
    }
  ]

  return (
    <div className="feedback-page">
      <TopNav />

      <div className="feedback-overflow">
        <Urls data={breadcrumbs} />

        <h1 className="feedback-title">Հաճախորդների կարծիքներ</h1>
         

         <div className="feedback-body">
             
        <font className="feedback-texts">
          Շատ շնորհակալ եմ արագ և որակյալ սպասարկման համար:
        </font>

        <font className="feedback-texts">
          Բարձրակարգ սպասարկում, շնորհակալություն:
        </font>

        <font className="feedback-texts">
          Ամեն ինչ ճիշտ էր ու թարմ: Շնորհակալ եմ:
        </font>

        <font className="feedback-texts">
          Արագ սպասարկում, բարեհամբույր առաքիչ, գերազանց որակ: Շնորհակալություն:
        </font>

        <font className="feedback-texts">
          Առաքումը կատարվել է ժամանակին եւ որակով:
        </font>

        <font className="feedback-texts">Ամեն բան հրաշալի էր:</font>
         </div>
      </div>
    </div>
  );
};
