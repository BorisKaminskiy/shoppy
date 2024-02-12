import { TIconType } from "@/types/icons";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";

export const setIcon = (
  variant: TIconType,
  size: number | undefined
): JSX.Element => {
  switch (variant) {
    case "arrowLeft":
      return <ArrowLeftIcon variant={size} />;
  }
};
