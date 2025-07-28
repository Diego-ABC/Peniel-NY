import Modal from "@/components/Modal";
import ContactForm from "./ContactForm";
import { useEffect } from "react";
import { useNavigation, useActionData } from "react-router-dom";

export default function NewContact({ open, setOpen }) {
  const navigation = useNavigation();
  const actionData = useActionData();

  useEffect(() => {
    if (
      navigation.state === "idle" &&
      actionData &&
      !actionData.error &&
      open
    ) {
      console.log("should close I guess?");
      setOpen(false);
    }
  }, [navigation.state, actionData, open]);

  const onSubmitSuccess = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <ContactForm
        action="newcontact"
        reset={open}
        error={actionData?.error}
        onSubmitSuccess={onSubmitSuccess}
      />
    </Modal>
  );
}
