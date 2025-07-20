import NavLink from "./NavLinkButton";
import navLinks from "./navLinks";
import { Link } from "react-router-dom";
import Exit from "@/assets/icons/Exit";

export default function NavPane({ className = "" }) {
  return (
    <div
      className={[
        "h-full w-3xs bg-base-300 flex flex-col gap-2 px-10 py-5",
        className,
      ].join(" ")}
    >
      {navLinks.map((link) => (
        <NavLink key={link.href} link={link} />
      ))}
      <Link to="/signin" className="btn btn-outline btn-neutral mt-auto">
        <Exit />
        sign out
      </Link>
    </div>
  );
}
