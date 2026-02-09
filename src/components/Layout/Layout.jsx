// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Wrapper from "../Wrapper/Wrapper";

const Layout = ({ cartCount }) => { // 1. App dan cartCount ni oladi
  return (
    <>
      <Header cartCount={cartCount} /> {/* 2. Headerga uzatadi */}
      <main>
        <Outlet />
      </main>
      <Wrapper/>
      <Footer />
    </>
  );
};

export default Layout;