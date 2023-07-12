import React from "react";
import "./App.scss";
import { Home } from "./pages/home";

import { ScrollToTop, scrollToTop } from "./components/scrollTop/scrollTop";

import { Routes, Route } from "react-router-dom";
import { About } from "./pages/about";
import { Footer } from "./components/footer";
import { Header } from "./components/header/index";
import { CorpoarteClients } from "./pages/corporateClients";
import { DeliveryPayment } from "./pages/deliveryPayment";
import { Vacancy } from "./pages/vacancy";
import { Abroad } from "./pages/abroad";
import { Feedback } from "./pages/feedback";
import { FAQ } from "./pages/FAQ";
import { UserGuide } from "./pages/userGuide";
import { Basket } from "./pages/basket pages/basket";
import { ProductPage } from "./pages/home/components/product page";
import { FavoritePage } from "./pages/home/components/favorite page";
import { FiltredProduct } from "./pages/home/filtredProduct";
import { ForgottenPassword } from "./components/header/components/enter/components/forgottenPassword";
import { Registration } from "./components/header/components/enter/components/registration";
import { ResponsiveLogin } from "./components/header/components/enter/components/responsiveLogin";
import { ResponsiveSearch } from "./components/header/components/headerSearch/components/responsiveSearch";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/corporateclients" element={<CorpoarteClients />} />
        <Route path="/deliveryPayment" element={<DeliveryPayment />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/abroad" element={<Abroad />} />
        <Route path ="/feedback" element={<Feedback />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/userGuide" element={<UserGuide />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/favoritepage" element={<FavoritePage />} />
        <Route path="/categories/:category" element={<FiltredProduct />} />
        <Route path="/forgotten" element={<ForgottenPassword />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/orders" element={<ResponsiveLogin />} />
        <Route path="/search" element={<ResponsiveSearch />}  />
      </Routes>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
