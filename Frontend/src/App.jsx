import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WrapComponent from "./Wrapcomponent";
import Contactus from "./components/nav/Contactus";
import Aboutus from "./components/nav/Aboutus";
import Cart_lists from "./components/cart/Cart_lists";
import Upload from "./components/Upload/Upload";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WrapComponent />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/carting" element={<Cart_lists />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}
export default App;
