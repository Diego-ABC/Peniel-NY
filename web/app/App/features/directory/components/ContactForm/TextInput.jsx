export default function TextInput({
  name,
  placeholder,
  defaultValue = "",
  className = "",
}) {
  return (
    <input
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={[
        "font-medium input input-ghost rounded-b-none focus:rounded-b-sm border-0 border-b-2 border-primary",
        className,
      ].join(" ")}
      type="text"
    />
  );
}
