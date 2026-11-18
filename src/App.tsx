import { useState } from "react";
import { Fitur } from "./components/Fitur";
import { Footer } from "./components/Footer";
import { FormOrder } from "./components/FormOrder";
import { Flippingitems } from "./pages/FlippingItems";
import Hero from "./components/Hero";

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <FormOrder toggle={toggle} setToggle={setToggle} />
      <header>
        <Hero toggle={toggle} setToggle={setToggle} />
      </header>
      <body>
        <Flippingitems/>
        <Fitur />
      </body>
      <Footer />
    </>
  )
}
