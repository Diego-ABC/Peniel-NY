export default function ToggleInput({ name, label, defaultChecked }) {
  return (
    <label className="flex items-center gap-2">
      <span className="font-medium">{label}</span>
      <input
        name={name}
        type="checkbox"
        className="toggle"
        defaultChecked={defaultChecked}
      />
    </label>
  );
}
