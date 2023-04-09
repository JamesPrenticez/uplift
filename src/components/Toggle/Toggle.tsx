import React, {useState, type ReactNode, type ReactElement} from "react"

export interface ToggleProps {
  label: string;
  children?: ReactNode;
  checked: boolean;
  value?: string | number | object;
  onChange: (checked: boolean) => void;
}

const Toggle = ({
  checked,
  onChange
}:ToggleProps): ReactElement => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onChange(checked);
  };

  return (
    <label 
      htmlFor="toggle" 
      className="
        relative
        block
        bg-gray-600
        w-14
        h-6
        rounded-full
        cursor-pointer
      "
    >
      <input 
        id="toggle"
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleChange}
      />
      <span 
        className={`
          absolute 
          -left-1 
          -top-1 
          w-8
          h-8
          rounded-full
          transition
          ${isChecked ? "bg-green-500 translate-x-full"  : "bg-blue-500" }
        `}
      />
    </label>
  )
}

export default Toggle