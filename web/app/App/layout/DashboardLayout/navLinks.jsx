import MusicNote from "@/assets/icons/MusicNote";
import Calendar from "@/assets/icons/Calendar";
import Book from "@/assets/icons/Book";
import AddressBook from "@/assets/icons/AddressBook";
import Play from "@/assets/icons/Play";

const navLinks = [
  {
    href: "events",
    displayText: "Events",
    icon: <Calendar />,
    isDefault: true,
  },
  { href: "worship", displayText: "Worship", icon: <MusicNote /> },
  { href: "docs", displayText: "Documents", icon: <Book /> },
  { href: "directory", displayText: "Directory", icon: <AddressBook /> },
  { href: "watch", displayText: "Watch", icon: <Play /> },
];
export default navLinks;

export const defaultLinkIndex = 0;
