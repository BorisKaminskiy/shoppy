"use client";

import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  FormEvent,
  FormHTMLAttributes,
  useState,
} from "react";
import cn from "classnames";
import styles from "./SubscribeForm.module.scss";

import { useWindowSize } from "@/hooks/useWindowResize";
import { Toaster } from "react-hot-toast";
import Input from "@/ui/Input/Input";
import { emailSuccess } from "@/ui/Toast/Toast";
import { VALIDATION } from '@/validation/validation';

interface ISubscribeFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

// const validateEmail = (email: string) => {
//   var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

//   return re.test(email);
// };

const SubscribeForm: FC<ISubscribeFormProps> = ({ ...props }) => {
  const { isMobile } = useWindowSize();
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSuccess(false);
    setError(undefined);
    setValue(e.currentTarget.value);
  };

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    if (VALIDATION.validateEmail(value)) {
      setValue("");
      setError(undefined);
      setSuccess(true);
      emailSuccess();
    } else {
      setError("Некорректный емайл");
    }
  };

  return (
    <form
      onSubmit={handleForm}
      className={cn(styles.root)}
      aria-label='Форма подписки на акции и предложения'
      {...props}
    >
      <Input
        value={value}
        onChange={onInputChange}
        name='email'
        variant='primary'
        iconButton={"arrowLeft"}
        error={error}
        iconSize={isMobile ? 15 : 25}
        placeholder='Ваш email для акций и предложений'
        aria-label='Поле ввода емайла'
        aria-errormessage={error}
      />

      <Toaster position='bottom-center'  />
    </form>
  );
};

export default SubscribeForm;
