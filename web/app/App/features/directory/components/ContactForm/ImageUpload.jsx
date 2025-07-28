// import { Plus, UserId } from "lucide-react"; // adjust as needed
import Plus from "@/assets/icons/Plus";
import UserId from "@/assets/icons/UserId";

export default function ImageUpload({ name, uploadedImgUrl, handleChange }) {
  return (
    <label
      htmlFor="new-contact-img"
      className="self-center indicator hover:bg-base-300 w-36 aspect-[4/5] rounded-lg cursor-pointer"
    >
      <input
        type="file"
        id="new-contact-img"
        accept="image/png, image/jpeg"
        className="hidden"
        name={name}
        onChange={handleChange}
      />
      {uploadedImgUrl ? (
        <img
          src={uploadedImgUrl}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <UserId size="size-56 -my-5 -mx-9" />
      )}
      <span className="indicator-item badge badge-primary aspect-square p-1">
        <Plus size="size-5" />
      </span>
    </label>
  );
}
