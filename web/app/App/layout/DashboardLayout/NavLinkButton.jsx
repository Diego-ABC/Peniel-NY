import { NavLink as RRLink } from "react-router-dom";

const NavLinkClass = ({ isActive }) =>
  [
    "btn justify-start gap-3 font-bold",
    isActive ? "btn-neutral" : "btn-ghost border-b-2 hover:border-b-primary",
  ].join(" ");

export default function NavLink({
  link: { href = "#", displayText = "", icon = null },
}) {
  return (
    <RRLink to={href} className={NavLinkClass}>
      {icon}
      {displayText}
    </RRLink>
  );
}
