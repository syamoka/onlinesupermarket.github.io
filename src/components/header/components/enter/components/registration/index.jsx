import "./styles.scss";
import { Urls } from "../../../../../../pages/urls";
import armFlag from "../../../../../../assets/icons/arm-flag.png";
import arrowbottom from "../../../../../../assets/icons/arrow-bottom.png";
import { RegistrationTel } from "./components/registrationTel";

export const Registration = () => {

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
    <div className="registration-page">
      <div className="registration-section">
        <Urls data={breadcrumbs} />

        <div className="registration">
          <form action="#">
            <div className="registration-inputs-parent">
              <label htmlFor="">Ձեր անունը</label>
              <input type="text" />
            </div>
            <div className="registration-inputs-parent">
              <label htmlFor="">Էլ․փոստ</label>
              <input type="text" />
            </div>

          <RegistrationTel />

            <div className="registration-inputs-parent">
              <label htmlFor="">Գաղտնաբառ</label>
              <input type="text" />
            </div>
            <div className="registration-inputs-parent">
              <label htmlFor="">Կրկնել գաղտնաբառը</label>
              <input type="text" />
            </div>

            <div className="registration-inputs-parent">
              <div className="registr-country-title">
                <label htmlFor="">Երկիր՝</label>
                <span>Որտե՞ղ եք բնակվում</span>
              </div>

              <div className="registr-select-country">
                <select name="" id="">
                  <option value="-----" selected>
                    ------
                  </option>
                  <option value="Armenia" selected>
                    Armenia
                  </option>
                  <option value="Belgium">Belgium</option>
                  <option value="Canada">Canada</option>
                  <option value="France">France</option>
                  <option value="Georgia">Georgia</option>
                  <option value="nyGerma">Germany</option>
                  <option value="Greece">Greece</option>
                  <option value="Russia">Russia</option>
                  <option value="Spain">Spain</option>
                  <option value="USA">USA</option>
                </select>
              </div>
            </div>

            <div className="registration-inputs-parent ">
              <div className="registr-bith-title">
                <label htmlFor="">Ե՞րբ եք ծնվել</label>
              </div>

              <div className="registr-select-birth">
                <select name="" id="">
                  <option value="-">-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>

                <select name="" id="">
                  <option value="--">--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>

                <select name="" id="">
                  <option value="--">--</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div className="registration-inputs-parent">
              <div className="registr-country-title">
                <label>Ինչպես եք գտել մեզ</label>
              </div>

              <div className="registr-how-find-us">
                <select name="" id="">
                  <option value="-----">-----</option>
                  <option value="Ինստագրամ">Ինստագրամ</option>
                  <option value="Մեքենաների գովազդ">Մեքենաների գովազդ</option>
                  <option value="Ֆեյսբուք">Ֆեյսբուք</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Ինտերնետային ֆիլմերի գովազդ">
                    Ինտերնետային ֆիլմերի գովազդ
                  </option>
                  <option value="Կայքեր">Կայքեր</option>
                  <option value="Մտերիմներ">Մտերիմներ</option>
                </select>
              </div>
            </div>

            <div className="registration-inputs-parent">
              <div className="registr-terms-and-conditions">
                <span>
                  <input type="checkbox" name="" id="" />
                </span>
                <label htmlFor="">Ես համաձայն եմ</label>
                <a href="#">«Օգտագործման պայմանների»</a>
              </div>

              <div className="registr-buttons">
                <div className="to-registr">
                    <a href=""> Գրանցվել</a>
                </div>
                <div className="already-registred">
                    <label htmlFor="">Ես արդեն գրանցվել եմ</label>
                </div>
              </div>
            </div>   
          </form>
        </div>
      </div>
    </div>
  );
};
