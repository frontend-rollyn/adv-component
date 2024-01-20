import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

//export default function Input({ id, label, ...props }: InputProps) {
//  return (
//    <p>
//      <label htmlFor="{id}">{label}</label>
//      <input id={id} {...props} />
//    </p>
//  );
//}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor="{id}">{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
