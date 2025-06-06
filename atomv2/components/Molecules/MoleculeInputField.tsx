import { useFormContext } from "react-hook-form";
import AtomInputV2 from "../Atoms/AtomInputV2";
import AtomTextV2 from "../Atoms/AtomTextV2";
import AtomLabelV2 from "../Atoms/AtomLabelV2";
import BlockDiv from "../Blocks/BlockDiv";

interface MoleculeInputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function MoleculeInputField({
  name,
  label,
  placeholder,
  required = false,
  disabled = false,
  className = "",
}: MoleculeInputFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <BlockDiv className={`mb-4 ${className}`}>
      {/* Label */}
      {label && (
        <AtomLabelV2 htmlFor={name}>
          {label} {required && <span className="text-red-500">*</span>}
        </AtomLabelV2>
      )}

      {/* Input Field */}
      <AtomInputV2
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, { required })}
      />

      {/* Error Message */}
      {errorMessage && (
        <AtomTextV2 className="text-red-500 text-sm mt-1">
          {errorMessage}
        </AtomTextV2>
      )}
    </BlockDiv>
  );
}
