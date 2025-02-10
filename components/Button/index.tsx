import { PropsWithChildren } from "react";
import clsx from "clsx";

import { Loader } from "@/components/Loader";
import { Sizes } from "@/components/Loader/constants";
import { BASE_STYLES, BUTTON_VARIANTS, VARIANT_STYLES } from "./constants";

type Props = PropsWithChildren & {
  variant?: BUTTON_VARIANTS;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
};

export const Button = ({
  children,
  variant = BUTTON_VARIANTS.PRIMARY,
  type = "button",
  isLoading = false,
}: Props) => (
  <button
    type={type}
    className={clsx(BASE_STYLES, VARIANT_STYLES[variant], {
      "opacity-50 cursor-not-allowed": isLoading,
    })}
    disabled={isLoading}
  >
    {isLoading ? <Loader size={Sizes.S} /> : children}
  </button>
);
