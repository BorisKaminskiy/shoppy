import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Range.module.scss";
import Typography from "../Typography/Typography";

interface IRangeProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  min: number;
  max: number;
  value: number;
}

const Range: FC<IRangeProps> = ({ min, max, value, ...props }) => {
  return (
    <label className={cn(styles.root)}>
      <div className={cn(styles.wrapper)}>
        <div
          style={{ width: `${(min / max) * 100}%` }}
          className={cn(styles.empty_range)}
        />
        <input
          style={{
            width: `${((max - min) / max) * 100}%`,
            background: `linear-gradient(to right, #d8d8d8 ${
              ((value - min) * 100) / (max - min)
            }%, #000 0px`,
          }}
          type='range'
          className={cn(styles.input)}
          value={value}
          min={min}
          max={max}
          {...props}
        />
        <div className={cn(styles.border)} />
      </div>

      <span className={cn(styles.label)}>
        <Typography variant='t14px400' color='gray30'>
          Цена: ${value} - ${max}
        </Typography>
      </span>
    </label>
  );
};

export default Range;
