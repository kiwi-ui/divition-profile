import { useState } from "react";
import { Fitur } from "./components/Fitur";
import { Footer } from "./components/Footer";
import { FormOrder } from "./components/FormOrder";
import { Navbar } from "./components/Navbar";
import { Flippingitems } from "./pages/FlippingItems";

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <FormOrder toggle={toggle} setToggle={setToggle} />
      <header>
        <Navbar toggle={toggle} setToggle={setToggle} />
      </header>
      <body>
        <Flippingitems/>
        <Fitur />
      </body>
      <Footer />
    </>
  )
}
