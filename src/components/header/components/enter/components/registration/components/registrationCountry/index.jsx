import "./styles.scss";

export const RegistrationCountry = () => {
  return (
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
  );
};
