import { logout } from ".";
export default async function signOutLoader() {
  return await logout();
}
