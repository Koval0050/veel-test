import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>; 
  type?: string;
  placeholder: string;
  error?: string;
}

export const FormInput = <T extends FieldValues>({
  register,
  name,
  type = "text",
  placeholder,
  error,
}: FormInputProps<T>) => {
  return (
    <div>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="w-full p-3 text-black  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
