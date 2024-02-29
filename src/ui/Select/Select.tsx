import { ChangeEvent, FC } from "react";
import cn from "classnames";
import styles from "./Select.module.scss";

import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import Typography from "../Typography/Typography";

export interface IOptionProps {
  id: number;
  name: string;
}

interface ISelectProps {
  defaultValue: string;
  values: IOptionProps[];
  ariaLabel: string;
  onSelectChange: (id: number) => void;
}

const Select: FC<ISelectProps> = ({
  defaultValue,
  values,
  onSelectChange,
  ariaLabel,
  ...props
}) => {
  const [selected, setSelected] = useState<string>(defaultValue);

  const onChange = (value: IOptionProps) => {
    value && setSelected(value.name);
    value && onSelectChange(value.id);
  };

  return (
    <div className={cn(styles.root)}>
      <Listbox value={selected}>
        <div className={cn(styles.wrapper)}>
          <Listbox.Button
            className={cn(styles.select_button)}
            aria-label='Выбор категории'
          >
            <Typography variant='t16-20px400' color='black'>
              {selected}
            </Typography>
            <span className={cn(styles.button_icon)}>
              <ArrowDownIcon />
            </span>
          </Listbox.Button>

          <Listbox.Options className={cn(styles.container)}>
            {values.map((item, index) => (
              <Listbox.Option
                onClick={() => onChange(item)}
                key={index}
                className={cn(styles.option)}
                value={item}
              >
                <Typography variant='t16-20px400' color='black'>
                  {item.name}
                </Typography>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
