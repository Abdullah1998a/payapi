import { useMediaQuery } from "../../hooks/useMediaQuery";
import close from "../../assets/images/close.svg";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";
import { useEffect, useState } from "react";
import { links } from "../../data/links";
import { Links } from "../links";

export default function Navbar() {
  const [show, setShow] = useState(false);
  let isMedium = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (show) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [show]);
  return (
    <nav className="flex justify-between md:justify-start items-center gap-10 py-8 relative">
      <a href="#">
        <img className="w-36" src={logo} alt="logo" />
      </a>
      <button className="block md:hidden" onClick={() => setShow(!show)}>
        <img src={show ? close : menu} alt="toggle icon" />
      </button>
      {(show || isMedium) && <Links links={links} isMedium={isMedium} />}
    </nav>
  );
}
