import { redirect } from "react-router-dom";
import links, { defaultLinkIndex } from "./navLinks";
export default async function homeRedirectLoader() {
  return redirect(links[defaultLinkIndex].href);
}
