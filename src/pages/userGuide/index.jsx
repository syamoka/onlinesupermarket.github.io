import "./styles.scss";

import { TopNav } from "../topnav";
import { Urls } from "../urls";

export const UserGuide = () => {
  const breadcrumbs = [
    {
      id: 1,
      name: "Գլխավոր էջ",
      path: "/",
      img: "https://supermarket.am/images/bread_right.svg",
    },
    {
      id: 2,
      name: "Օգտագործողի ուղեցույց",
      path: "/userGuide",
    },
  ];

  return (
    <div className="user-guide-page">
      <TopNav />

      <div className="userguide-overflow">
        <Urls data={breadcrumbs} />

        <h1 className="userguide-title">Օգտագործողի ուղեցույց</h1>

        <p className="userguide-titles introduction">
          <font>1. Ներածություն</font>
        </p>

        <p className="userguide-text">
          1.1.Սույն ընդհանուր դրույթները և պայմանները (այսուհետ՝ Պայմաններ)
          սահմանում և կարգավորում են Օնլայն Սուպերմարկետ ընկերության (այսուհետ
          նաև՝ Ընկերություն, Մենք) supermarket.am կայքով (այսուհետ նաև՝ Կայք)
          Ընկերության կողմից մատուցվող ծառայությունների հետ կապված
          իրավահարաբերությունները:
        </p>

        <p className="userguide-text">
          1.2.Մուտք գործելով Կայք, օգտագործելով Կայքի ցանկացած ծառայություն կամ
          ներբեռնելով ցանկացած բովանդակություն՝ ամբողջությամբ կամ դրա մի մասը
          Դուք, որպես օգտագործող (այսուհետ նաև՝ Օգտագործող, Դուք, Ձեզ, Ձեր,
          Հաճախորդ) հաստատում եք, որ ամբողջությամբ կարդացել և հասկացել եք սույն
          օգտագործման պայմանները, ինչպես նաև Կայքում հրապարակված Ընկերության
          կողմից Ծառայությունների մատուցման այլ պայմանները, և անվերապահորեն
          ընդունում եք դրանք, ինչպես նաև գաղտնիության քաղաքականությունը անկախ
          նրանից՝ Դուք Ընկերության կողմից մատուցվող Ծառայությունների հաճախորդ
          եք, Կայքի գրանցված օգտագործող, թե՝ ուղղակի այցելու:
        </p>
        <p className="userguide-text">
          1.3.Ընկերությունն իրավունք ունի առանց նախապես ծանուցման, միակողմանի,
          ցանկացած պահի փոփոխություններ կատարել Կայքի բովանդակության,
          «Գաղտնիության քաղաքականության» մեջ և սույն Պայմաններում»: Փոփոխության
          դեպքում Ընկերությունը կհրապարակի նորացված պայմանները ինտերնետային
          Կայքում՝ նշելով վերջին փոփոխության ամսաթիվը: Օգտագործողի
          պարտականությունն է ժամանակ առ ժամանակ այցելել Կայք և ստուգել
          Պայմանների և «Գաղտնիության քաղաքականության» փոփոխությունները: Նոր
          պայմանները իրավական ուժ կունենան և կտարածվեն, դրանք Կայքում
          տեղադրելուց հետո ծագած պարտավորությունների վրա:Պայմանները սահմանված են
          և մեկնաբանվում են` համաձայն ՀՀ օրենսդրության:
        </p>
        <p className="userguide-text">
          1.4.Եթե Դուք համաձայն չեք սույն Պայմաններին, խնդրում ենք դադարեցնել
          Կայքի օգտագործումը: Կայքում գտնվելը, հաշիվ բացելը, Օգտագործող դառնալը
          և Ծառայություններից օգտվելը փաստում են Ձեր կողմից սույն Պայմանների
          անվերապահ ընդունումը:
        </p>

        <p className="userguide-titles">
          <font>
            2. Supermarket.am-ի կողմից մատուցվող ծառայությունները և դրանց
            մատուցման կարգը
          </font>
        </p>

        <p className="userguide-text">
          2.1. Օնլայն սուպերմարկետը գնումների էլեկտրոնային տարբերակ է, որը թույլ
          է տալիս սպառողին գտնել իրեն անհրաժեշտ ապրանքը, կատարել առցանց վճարում
          և պատվիրել դրա առաքումն իր նշած հասցեով: Կայքը՝ լուսանկարներով,
          որոնման հնարավորություններով, այցելուին տրամադրում է գնում կատարելու
          համար անհրաժեշտ ամբողջական տեղեկատվություն:
        </p>

        <p className="userguide-titles">
          <font>3. Գրանցում</font>
        </p>

        <p className="userguide-text">
          3.1. Օնլայն խանութից գնումներ կատարելու համար Դուք կարող եք գրանցվել
          Կայքում:
        </p>
        <p className="userguide-text">
          3.2. Supermarket.am-ում գրանցվելու կամ ցանկացած այլ եղանակով պատվեր
          կատարելու համար Դուք պետք է լինեք 18 տարեկանից բարձր:
        </p>
        <p className="userguide-text">
          3.3. Դուք հավաստում եք, որ գրանցման ժամանակ կամ դրանից հետո տրամադրված
          տվյալները ճշգրիտ և ամբողջական են:
        </p>

        <p className="userguide-titles">
          <font>4. ԱՌԱՔՄԱՆ ԿԱՐԳ</font>
        </p>

        <p className="userguide-text">
          4.1. Մինչև 10000 դր գնումների դեպքում առաքման արժեքը 500 դր է, իսկ
          10.000 դրամ և ավելի գնումների դեպքում առաքումը կլինի անվճար: Առաքման
          ժամկետը պարբերաբար փոփոխվում է կախված պատվերների քանակից և այլ
          պայմաններից: Առաքման համար նշված ժամկետը կարող է տարբերվել փաստացի
          առաքման ժամից:
        </p>

        <p className="userguide-titles">
          <font>5. Պատվերի կարգավիճակը և պատմությունը</font>
        </p>

        <p className="userguide-text">
          5.1.Կայք մուտք գործելուց հետո Դուք հնարավորություն եք ունենում Ձեր
          անձնական էջում հետևելու պատվերների պատմությանը և տեսնել կատարված
          պատվերի ամսաթիվը , կարգավիճակը (« Հանձնված է հավաքման », « Առաքումը
          սկսված է », « Ամբողջությամբ առաքված է » և այլն ), ինչպես նաև զամբյուղի
          արժեքը:
        </p>
      </div>
    </div>
  );
};
