import "./styles.scss";

import { TopNav } from "../topnav";
import { Urls } from "../urls";

export const FAQ = () => {
  const breadcrumbs = [
    {
      id: 1,
      name: "Գլխավոր էջ",
      path: "/",
      img: "https://supermarket.am/images/bread_right.svg",
    },
    {
      id: 2,
      name: "Հաճախակի տրվող հարցեր",
      path: "/feedback",
    },
  ];

  return (
    <div className="FAQ-page">
      <TopNav />

      <div className="FAQ-overflow">
        <Urls data={breadcrumbs} />

        <h1 className="FAQ-title">Հաճախակի տրվող հարցեր</h1>

        <p className="FAQ-titles">Ի՞նչ է online սուպերմարկետը</p>

        <div className="FAQ-texts">
          Օնլայն սուպերմարկետը գնումների այլընտրանքային, էլեկտրոնային տարբերակ
          է, որը թույլ է տալիս սպառողին հեշտությամբ գտնել իրեն անհրաժեշտ
          ապրանքը, կատարել առցանց վճարում և պատվիրել դրա առաքումն իր նշած
          հասցեով: SAS.am-ի դեպքում, առցանց վճարմանը զուգահեռ, առկա է նաև կանխիկ
          կամ քարտով վճարում:
        </div>

        <p className="FAQ-titles">
          Ի՞նչ առավելություններ ունի էլեկտրոնային առևտուրը
        </p>

        <div className="FAQ-texts">
          Դուք գնում եք Ձեզ անհրաժեշտ ապրանքները՝ առանց տնից կամ աշխատավայրից
          դուրս գալու, այդպիսով խնայելով Ձեր ժամանակը: Շնորհիվ որոնման ճկուն
          համակարգի՝ արագորեն գտնում և գնում եք յուրաքանչյուր ապրանք: Վճարումն
          իրականացնում եք նաև առցանց՝ օգտագործելով Ձեր վճարային քարտը: Քարտով
          վճարումը հնարավոր է նաև պատվերը ստանալիս՝ առաքիչի մոտ առկա շարժական
          POS տերմինալի միջոցով:
        </div>

        <p className="FAQ-titles">
          Ինչպե՞ս կարող եմ գտնել իմ նախընտրած ապրանքը
        </p>

        <div className="FAQ-texts">
          Ձեր նախընտրած ապրանքները կարող եք գտնել երկու ճանապարհով՝ որոնման
          համակարգի միջոցով և կատալոգում:
        </div>

        <p className="FAQ-titles">
          Կարո՞ղ եմ արդյոք ստեղծել իմ նախընտրած ապրանքների ցուցակ` առանց դրանք
          զամբյուղին ավելացնելու
        </p>

        <div className="FAQ-texts">
          Այո՛, կարող եք: Եթե կայքի տարբեր էջեր այցելելիս հավանում եք այս կամ
          այն ապրանքը, սակայն դեռևս չեք պատրաստվում այն գնել, կարող եք հավելել
          «Նախընտրածներ» ցուցակին, որպեսզի հաջորդ անգամ գնում կատարելիս
          հեշտությամբ գտնեք այն: Դրա համար հարկավոր է սեղմել տվյալ ապրանքի
          անվանման աջ կողմում գտնվող սրտիկը:
        </div>
      </div>
    </div>
  );
};
