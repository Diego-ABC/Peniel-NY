export default function SelectInput({ name, state, options = [] }) {
  return (
    <select
      name={name}
      defaultValue={state}
      className="select w-20 border-0 border-b-2 rounded-b-none border-b-primary focus:rounded-lg focus:border-none"
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
