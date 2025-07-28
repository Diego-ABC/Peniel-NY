import Modal from "@/components/Modal";
import { set } from "firebase/database";
import { useState } from "react";
import NewContact from "./NewContact";

export default function DirectoryHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-20 flex flex-row items-center justify-between border-b-4 border-base-300 -mt-5">
      <h1 className="text-2xl font-medium">Directory</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setOpen(true);
        }}
      >
        Add New
      </button>
      <NewContact open={open} setOpen={setOpen} />
    </div>
  );
}
