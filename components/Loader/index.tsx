import React, { FC } from "react";
import clsx from "clsx";
import { LOADER_SIZES, Sizes } from "./constants";

interface Props {
  size?: Sizes;
  className?: string;
}

export const Loader: FC<Props> = ({ size = Sizes.XS, className }) => (
  <div
    className={clsx(
      "mx-auto border-2 border-white border-t-yellow-500 rounded-full animate-spin",
      LOADER_SIZES[size],
      className
    )}
  />
);
