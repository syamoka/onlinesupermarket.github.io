import { Minimarket } from "../minimarket";
import { Novelty } from "../novelty";
import { Save } from "../save";
import { SliderSection } from "../sliderSection";
import { TopSale } from "../topSale";
import "./styles.scss";
import { NavInResponsive } from "./components/navInResponsive";
import { MarketInResponsive } from "../minimarket/components/marketInResponsive";
import { ResponsiveBanner } from "../../../../components/footer/components/fourBanner/components/responsiveBanner";
export const Main = () => {
  return (
    <main className="main">
        <SliderSection />
        <TopSale />
        <NavInResponsive />
        <Novelty />
        <MarketInResponsive />
        <ResponsiveBanner />
        <Save />
        <Minimarket />
    </main>
  );
};
