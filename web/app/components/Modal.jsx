import { useEffect, useRef } from "react";

export default function Modal({ open, setOpen, children, className }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) dialog.showModal();
    else dialog.close();

    const handleClose = () => setOpen(false);
    dialog.addEventListener("close", handleClose);

    return () => dialog.removeEventListener("close", handleClose);
  }, [open, setOpen]);

  return (
    <dialog ref={dialogRef} className={["modal", className].join(" ")}>
      {children}
    </dialog>
  );
}
