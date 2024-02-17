import { ChangeEvent, DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Select.module.scss";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import Typography from "../Typography/Typography";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export interface IOptionProps {
	id: number | string
	name: string
}

interface ISelectProps
  // extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
{
	defaultValue: string,
  values: IOptionProps[]
  ariaLabel: string
	onSelectChange: (id: string | number) => void
}

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

const Select: FC<ISelectProps> = ({defaultValue, values, onSelectChange, ariaLabel, ...props }) => {
	const [selected, setSelected] = useState<string>(defaultValue);
	
	const onChange = (value: string) => {
		const id = values.find((item) => item.name === value)?.id;
		value && setSelected(value)
		id && onSelectChange(id)
	}

  return (
    <div className={cn(styles.root)}> 
			<Listbox value={ selected } onChange={onChange } {...props}>
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
          <Transition
            as={Fragment}
            leave='transition ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className={cn(styles.container)}>
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
