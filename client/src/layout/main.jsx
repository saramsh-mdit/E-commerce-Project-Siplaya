import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

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
