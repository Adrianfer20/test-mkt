const FormField = ({ id, name, type, placeholder, value, onChange, required }) => (
    <div>
        <label htmlFor={id} className="sr-only">
            {placeholder}
        </label>
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder={placeholder}
        />
    </div>
);

export default FormField;