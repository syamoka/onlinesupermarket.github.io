import "./styles.scss";
import { TopNav } from "../topnav";
import { Urls } from "../urls";

export const About = () => {
  const breadcrumbs = [
    {
      id: 1,
      name: "Գլխավոր էջ",
      path: "/",
      img: "https://supermarket.am/images/bread_right.svg",
    },
    {
      id: 2,
      name: "Online Supermarket-ի մասին",
      path: "/about",
    },
  ];

  return (
    <div className="about-page">
      <TopNav />
      <div className="overflow">
        <Urls data={breadcrumbs} />

        <div className="content">
          <div className="about-content">
            <h1>Online Supermarket-ի մասին</h1>
            <h2>Ի՞նչ է Online Supermarket-ը</h2>
            <p>
              Մեր եռալեզու և անընդհատ թարմացվող բազայում ընդգրկված տասնյակ
              հազարավոր ապրանքատեսակները, ընտրության և որոնման պարզ գործիքները
              այցելուին արագ և խելամիտ գնումներ կատարելու հնարավորություն են
              ընձեռում:
            </p>
            <h2>Մեր առաքելությունը</h2>
            <p>
              Online Supermarket -ի առաքելությունն է օգնել մեր գնորդին
              օգտագործել տեղեկատվական դարում մարդուն ընձեռվող
              հնարավորությունները՝ ցանկացած ապրանք գտնելու, ուսումնասիրելու և
              հեշտությամբ գնելու համար:
            </p>

            <h2>Գնումների նոր փիլիսոփայություն</h2>

            <p>
              Online Supermarket-ն օնլայն գնումների համակարգին անցնելու
              լավագույն տարբերակն է: Կայքը՝ որակյալ լուսանկարներով, որոնման
              հնարավորություններով, այցելուին տրամադրում է գնում կատարելու համար
              անհրաժեշտ ամբողջական տեղեկատվություն: Ընդամենը մի քանի քայլի
              արդյունքում Ձեր նախընտրած ապրանքները կարող եք պատվիրել Հայաստանի
              Հանրապետության և Լեռնային Ղարաբաղի ողջ տարածքից, ինչպես նաև ամբողջ
              աշխարհից՝ Հայաստանում բնակվող Ձեր հարազատների և բարեկամների համար:
            </p>
            <p>
              Այսուհետ գնումներ կատարելու համար հարկադրված չեք լինի այցելել
              սուպերմարկետ, հատկապես եթե այն Ձեր բնակավայրից բավականաչափ հեռու
              է: Տան, աշխատավայրի, ռեստորանի կամ ցանկացած այլ հաստատության համար
              անհրաժեշտ ապրանքները կարող եք ձեռք բերել առցանց:&nbsp;
            </p>
            <p>
              Online supermarket -ից գնումներ կատարելը ոչ միայն հեշտ է և հարմար,
              այլև անվտանգ: Մենք երաշխավորում ենք Ձեր մուտքագրած քարտային
              տվյալների գաղտնիությունը և քարտում առկա գումարի ապահովությունը:
              Արտերկրում գործող օնլայն խանութներից տարբերվում է նրանով, որ մեզ
              մոտ վճարումները կարող եք կատարել ոչ միայն առցանց, այլև ապրանքը
              ստանալու պահին՝ կանխիկ կամ վճարային քարտով, հենց Ձեր տանը կամ
              աշխատավայրում:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
