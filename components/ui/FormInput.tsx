interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const FormInput = ({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-[var(--foreground)]"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-[var(--border-highlight)] bg-transparent outline-none focus:border-[var(--color-highlight)] focus:ring-1 focus:ring-[var(--color-highlight)] transition-all text-[var(--foreground)]"
      />
    </div>
  );
};

export default FormInput;