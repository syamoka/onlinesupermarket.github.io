import "./styles.scss";

import { TopNav } from "../topnav";
import { Urls } from "../urls";

import vacancyimg1 from "../../assets/vacancy-images/2d87e6494197a666a561fb4a63c18b5e.png";
import vacancyimg2 from "../../assets/vacancy-images/8b5fb019666bf0a937f0b1ba58b262f5.png";
import vacancyimg3 from "../../assets/vacancy-images/ae3ed11edae06b82b9505e8f660285a3.png";


export const Vacancy = () => {
  const vacancyData = [
    {
      id: 1,
      title: "Օնլայն Սուպերմարկետին անհրաժեշտ է բաժնի աշխատակից",
      image:  vacancyimg1
    },

    {
      id: 2,
      title: "Օնլայն Սուպերմարկետին անհրաժեշտ է վարորդ-առաքիչ",
      image:  vacancyimg2
    },

    {
      id: 3,
      title: "Օնլայն Սուպերմարկետին անհրաժեշտ է պատվեր հավաքագրող",
      image: vacancyimg3,
      date: "30.08.2021"
    }
  ]
  

  const breadcrumbs = [
    {
      id: 1,
      name: "Գլխավոր էջ",
      path: "/",
      img: "https://supermarket.am/images/bread_right.svg",
    },
    {
      id: 2,
      name: "աշխատանք",
      path: "/vacancy",
    },
  ];

  return (
    <div className="vacancy-page">
      <TopNav />
      <Urls data={breadcrumbs} />

      <h1 className="vacancy-title">Աշխատատեղեր</h1>
      <table className="vacancy-lists">
        <tbody>
          {vacancyData.map((el) => {
            return (
              <tr className="vacancy-list">
                <td className="vacancy-image">
                  <a href="#">
                    <img src={el.image} alt="" />
                  </a>
                </td>

                <td className="vacancy-text">
                  <div>{el.date}</div>

                  <a href="#">{el.title}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
