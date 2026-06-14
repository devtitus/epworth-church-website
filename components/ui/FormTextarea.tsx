interface FormTextareaProps {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

const FormTextarea = ({
  label,
  id,
  placeholder,
  required = false,
  rows = 5,
}: FormTextareaProps) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-[var(--foreground)]"
      >
        {label}
      </label>
      <textarea
        id={id}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-[var(--border-highlight)] bg-transparent outline-none focus:border-[var(--color-highlight)] focus:ring-1 focus:ring-[var(--color-highlight)] transition-all text-[var(--foreground)] resize-none"
      />
    </div>
  );
};

export default FormTextarea;