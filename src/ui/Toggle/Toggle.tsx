import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import Typography from '../Typography/Typography';
import cn from "classnames";
import styles from "./Toggle.module.scss";

interface IToggleProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  isEnabled: boolean;
  setEnabled: () => void;
}

const Toggle: FC<IToggleProps> = ({label, isEnabled, setEnabled, ...props }) => {
  return (
    <label className={ cn(styles.root) }>
      <Typography variant='t16px169' color='black'>{label }</Typography>
      <input
        type='checkbox'
        role='switch'
        onChange={setEnabled}
        className={cn(styles.toggle, isEnabled && styles.toggle_active)}
        {...props}
      />
    </label>
  );
};

export default Toggle;
