import Nav from "./components/nav/Nav";
import Menu_swiper from "./components/menu_swiper/Menu_swiper";
import Menu_body from "./components/menu_body/Menu_body";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
export default function WrapComponent() {
  return (
    <>
      <Nav />
      <Menu_swiper />
      <Menu_body />
      <Cart />
      <Footer />
    </>
  );
}
