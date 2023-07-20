import Footer from "../components/global/Footer";
import NavBar from "../components/global/Navbar";

const MainContainer = (props) => {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: "100vh" }}>{props?.children}</main>
      <Footer />
    </>
  );
};

export default MainContainer;
