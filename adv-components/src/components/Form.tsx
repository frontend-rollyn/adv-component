import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps }: FormProps,
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      clear: () => {
        form.current?.reset();
      },
    }),
    [form]
  );

  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    console.log("Form onSave");
    form.current?.reset();
  }

  return (
    <form onSubmit={handleOnSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
