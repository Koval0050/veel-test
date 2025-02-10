import clsx from "clsx";

import { TypographyVariants, VARIANT_STYLES } from "./constants";

type Props = {
  text: string;
  variant?: TypographyVariants;
  className?: string;
};

export const Typography = ({
  text,
  variant = TypographyVariants.P,
  className,
}: Props) => {
  const Component = variant;

  return (
    <Component className={clsx(VARIANT_STYLES[variant], className)}>
      {text}
    </Component>
  );
};
