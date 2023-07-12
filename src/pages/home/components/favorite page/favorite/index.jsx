import { favorites } from "../../productSlider/productSliderSlice";
import { useSelector } from "react-redux";
import { ProductsFiltred } from "../../../filtredProduct/components/productsFiltred";
import { FiltredProductNav } from "../../../filtredProduct/components/filtredProductsNav";
import { Urls } from "../../../../urls";

export const Favorite = () => {
  const favoriteData = useSelector(favorites);
   
  const breadcrumbs = [
    {
      id: 1,
      name: "Գլխավոր էջ",
      path: "/",
      img: "https://supermarket.am/images/bread_right.svg"
    },  
    {
      id: 2,
      name: "Նախընտրածների ցուցակ",
      path: "/favoritepage",
    }
  ]

  return (
    <div className="favorite-page">
      <Urls data={breadcrumbs} />
      <h1 className="favorite-page-title">Նախընտրածների ցուցակ</h1>
      <FiltredProductNav />
      <ProductsFiltred products={favoriteData} />
    </div>
  );
};
