import { PropsWithChildren } from "react";
import clsx from "clsx";

import { Loader } from "@/components/Loader";
import { Sizes } from "@/components/Loader/constants";
import { BASE_STYLES, BUTTON_VARIANTS, VARIANT_STYLES } from "./constants";

type Props = PropsWithChildren & {
  variant?: BUTTON_VARIANTS;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  onClick?: VoidFunction;
};

export const Button = ({
  children,
  variant = BUTTON_VARIANTS.PRIMARY,
  type = "button",
  isLoading = false,
  onClick,
}: Props) => (
  <button
    className={clsx(BASE_STYLES, VARIANT_STYLES[variant], {
      "opacity-50 cursor-not-allowed": isLoading,
    })}
    onClick={onClick}
    type={type}
    disabled={isLoading}
  >
    {isLoading ? <Loader size={Sizes.S} /> : children}
  </button>
);
