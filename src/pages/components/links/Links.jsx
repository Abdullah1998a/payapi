import { NavLink } from "react-router-dom";
import "./links.css";

export default function Links({ links, isMedium }) {
  return (
    <ul
      className={
        isMedium
          ? "w-full flex items-center gap-6"
          : "w-full flex flex-col p-8 pb-10 gap-10 justify-center items-center absolute -bottom-[350px] left-0 bg-white rounded-lg shadow-md"
      }
    >
      {links.map(({ id, name, link }) => (
        <li
          key={id}
          className={
            id === 5 ? (isMedium ? "ml-auto" : "ml-0") : "text-[0.95rem]"
          }
        >
          <NavLink
            className={
              id === 5
                ? "btn"
                : "text-[#7d8a94] hover:text-[#a6b7c4] capitalize duration-200 font-bold"
            }
            to={link}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
