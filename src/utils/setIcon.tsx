import { TIconType } from "@/types/icons";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import SearchIcon from "@/assets/icons/SearchIcon";

export const setIcon = (
  variant: TIconType,
  size: number | undefined
): JSX.Element | undefined => {
  switch (variant) {
    case "arrowLeft":
      return <ArrowLeftIcon variant={size} />;
    case "search":
      return <SearchIcon variant={size} />;
  }
};
