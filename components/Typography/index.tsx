import { PropsWithChildren } from "react";
import clsx from "clsx";

import { TypographyVariants, VARIANT_STYLES } from "./constants";

type Props = PropsWithChildren & {
  variant?: TypographyVariants;
  className?: string;
};

export const Typography = ({
  variant = TypographyVariants.P,
  className,
  children,
}: Props) => {
  const Component = variant;

  return (
    <Component className={clsx(VARIANT_STYLES[variant], className)}>
      {children}
    </Component>
  );
};
