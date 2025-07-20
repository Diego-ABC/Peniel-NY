import { login } from ".";
import { redirect } from "react-router-dom";
export default async function signInAction({ request, params }) {
  try {
    const formData = Object.fromEntries(await request.formData());
    const { email, password } = formData;
    await login({
      email: email.trim(),
      password,
    });
    return redirect("/");
  } catch (error) {
    return { error: error.message };
  }
}
