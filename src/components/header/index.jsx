import { TopNavigation } from "./components/topNavigation";
import { CentralHeader } from "./components/centralHeader";
import { Navigation } from "./components/navigation";
import "./styles.scss";
import { ResponsiveNav } from "./components/navigation/components/responsiveNav";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <TopNavigation />
        <CentralHeader />
        <Navigation />
        <ResponsiveNav />
      </div>
    </header>
  );
};
