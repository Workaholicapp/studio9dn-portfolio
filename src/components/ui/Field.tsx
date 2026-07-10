"use client";

export function Input({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div className="s9ui-field">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="s9ui-field">
      <label>{label}</label>
      <select defaultValue={options[0]}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

export function Textarea({ label, placeholder, rows = 5 }: { label: string; placeholder?: string; rows?: number }) {
  return (
    <div className="s9ui-field">
      <label>{label}</label>
      <textarea placeholder={placeholder} rows={rows} />
    </div>
  );
}
