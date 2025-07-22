import getFormDataFromRequest from "@/lib/utils/getFormDataFromRequest";
import { redirect } from "react-router-dom";
import createContact from "../services/createContact";

export default async function newContactAction({ request }) {
  try {
    const {
      firstName = "",
      lastName = "",
      address = "",
      city = "",
      state = "NY",
      zip = "",
      phone = "",
      altPhone = "",
      email = "",
      hasCar = false,
      canDrive = false,
      contactImgFile = null,
    } = await getFormDataFromRequest(request);
    await createContact({
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      phone,
      altPhone,
      email,
      hasCar,
      canDrive,
      contactImgFile,
    });
  } catch (error) {
    console.log(error);
    // return { error: error.message };
  }
  return redirect("/directory");
}
