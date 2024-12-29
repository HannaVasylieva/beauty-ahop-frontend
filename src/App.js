import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import "./App.scss";
import { Header } from "./Header/Header";
import { SectionInfo } from "./SectionInfo/SectionInfo";
import { About } from "./About/About";
import { Background } from "./Background/Background";
import { ShopSection } from "./ShopSection/ShopSection";
import { ShopPage } from "./Pages/ShopPage/ShopPage";
import { CartPage } from "./Pages/CartPage/CartPage";
import { MainInfo } from "./MainInfo/MainInfo";
import { Creators } from "./Creators/Creators";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="app">
            <Header />
            <Background />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <MainInfo />
                    <SectionInfo />
                    <About />
                    <ShopSection />
                    <Creators />
                    <Contact />
                  </>
                }
              />
              <Route path="/shopPage" element={<ShopPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
