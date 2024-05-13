import { Navbar, Home, Pricing, About, Contact, Ready, Footer } from "./pages";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Ready />
      <Footer />
    </>
  );
}
