"use client";

import {
  DetailedHTMLProps,
  FC,
  FormEvent,
  FormHTMLAttributes,
  useState,
} from "react";
import cn from "classnames";
import styles from "./SubscribeForm.module.scss";

import { useWindowSize } from "@/hooks/useWindowResize";
import toast, { Toaster, resolveValue } from "react-hot-toast";
import Input from "@/ui/Input/Input";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import { emailSuccess } from "@/ui/Toast/Toast";

interface ISubscribeFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

const validateEmail = (email: string) => {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  return re.test(email);
};

const SubscribeForm: FC<ISubscribeFormProps> = ({ ...props }) => {
  const windowSize = useWindowSize();
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    setSuccess(false);
    setError(undefined);
    setValue(e.currentTarget.value);
  };

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    if (validateEmail(value)) {
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
        iconSize={!!windowSize.width && windowSize.width < 1000 ? 15 : 25}
        placeholder='Ваш email для акций и предложений'
        aria-label='Поле ввода емайла'
        aria-errormessage={error}
      />

      <Toaster position='bottom-center'  />
    </form>
  );
};

export default SubscribeForm;
