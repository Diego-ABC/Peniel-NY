// import Plus from "@/assets/icons/Plus";
// import UserId from "@/assets/icons/UserId";
import useImageUpload from "@/hooks/useImageUpload";
import { useEffect, useState, useRef } from "react";
import { Form } from "react-router-dom";

import ImageUpload from "./ImageUpload";
import SelectInput from "./SelectInput";
import ToggleInput from "./ToggleInput";
import TextInput from "./TextInput";
import createContact from "../../services/createContact";

export default function ContactForm({
  action,
  defaultData: {
    imgUrl = "",
    firstName = "",
    lastName = "",
    address = "",
    city = "",
    state = "",
    zip = "",
    phone = "",
    altPhone = "",
    email = "",
    hasCar = false,
    canDrive = false,
  } = {},
  reset = true,
  onSubmitSuccess = false,
}) {
  const {
    imgUrl: uploadedImgUrl,
    error,
    handleImageUpload,
    clearImg,
  } = useImageUpload(imgUrl);

  const formRef = useRef();
  useEffect(() => {
    formRef.current?.reset();
  }, [reset]);

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    if (!formRef.current) return;
    const contactData = Object.fromEntries(new FormData(formRef.current));
    // console.log(data);
    await createContact(contactData);
    onSubmitSuccess();
  };

  return (
    <form
      method="POST"
      ref={formRef}
      className="flex flex-col items-center space-y-4"
      onSubmit={handleFormSubmit}
      onReset={clearImg}
    >
      <h2 className="text-lg font-medium self-start">New Contact</h2>

      <ImageUpload
        name="contactImgFile"
        uploadedImgUrl={uploadedImgUrl}
        handleChange={handleImageUpload}
      />

      <div className="flex gap-4 w-sm">
        <TextInput
          name="firstName"
          defaultValue={firstName}
          placeholder="First Name"
        />
        <TextInput
          name="lastName"
          defaultValue={lastName}
          placeholder="Last Name"
        />
      </div>

      <TextInput
        name="address"
        defaultValue={address}
        placeholder="Address"
        className="w-sm"
      />

      <div className="flex gap-4 w-sm">
        <TextInput name="city" defaultValue={city} placeholder="City" />
        <SelectInput name="state" options={["NY", "NJ"]} />
        <TextInput name="zip" defaultValue={zip} placeholder="Zip" />
      </div>

      <TextInput
        name="email"
        defaultValue={email}
        placeholder="Email"
        className="w-sm"
      />

      <div className="flex gap-4 mt-3 w-sm justify-start">
        <ToggleInput name="hasCar" label="Has Car" defaultChecked={hasCar} />
        <ToggleInput
          name="canDrive"
          label="Can Drive"
          defaultChecked={canDrive}
        />
      </div>

      <div className="w-sm flex justify-end">
        <button className="btn btn-success">Save</button>
      </div>
    </form>
  );
}
