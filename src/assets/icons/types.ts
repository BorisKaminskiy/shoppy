import { SVGAttributes } from "react";

export interface ISvgProps extends SVGAttributes<HTMLOrSVGElement>

{
  width?: number | string
  height?: number | string
  variant?: number
  }