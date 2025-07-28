import Phone from "@/assets/icons/Phone";
// import sampleContact from "../services/sampleContact";
import Car from "@/assets/icons/Car";
import License from "@/assets/icons/License";
import UserId from "@/assets/icons/UserId";
export default function ContactCard({
  contact: {
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
  } = sampleContact,
  selected = false,
}) {
  return (
    <div className="card card-md border-2 cursor-pointer border-primary w-lg flex flex-row p-5 hover:shadow-lg active:shadow-md transition">
      {imgUrl ? (
        <img
          src={imgUrl}
          alt={`${firstName} ${lastName}`}
          className="w-36 aspect-[3/4] rounded-md object-cover"
        />
      ) : (
        <div className="w-36 aspect-[3/4] flex justify-center items-center ">
          <UserId size="size-46 -m-5" />
        </div>
      )}
      <div className="divider divider-horizontal"></div>
      <div className="grow flex flex-col items-start gap-2.5">
        <div className="w-full border-b-2 border-primary text-lg font-medium">
          {firstName} {lastName}
        </div>
        <div className="w-full border-b-2 border-primary">
          {address} | {city}, {state} {zip}
        </div>
        <div className="w-full border-b-2 border-primary">
          {email || "noEmail"}
        </div>
        {/* <div className="w-full border-b-2 border-primary flex flex-row items-center gap-2">
          <Phone size="size-4" />
          {[phone, altPhone].join(" · ")}
        </div> */}
        <div className="flex flex-row gap-2.5">
          <button className="btn btn-primary">
            <Phone size="size-4" />
            {phone}
          </button>
          <button className="btn btn-soft btn-primary">
            <Phone size="size-4" />
            {altPhone}
          </button>
        </div>
        <div className="flex flex-row gap-2.5">
          {hasCar && (
            <div className="badge badge-xl badge-accent">
              <Car size="size-6" />
            </div>
          )}
          {canDrive && (
            <div className="badge badge-xl bg-emerald-300">
              <License size="size-6" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
