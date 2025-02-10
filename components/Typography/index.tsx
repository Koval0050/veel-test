import clsx from "clsx";

import { TYPOGRAPHY_VARIANTS, VARIANT_STYLES } from "./constants";

type Props = {
  text: string;
  variant?: TYPOGRAPHY_VARIANTS;
  className?: string;
};

export const Typography = ({
  text,
  variant = TYPOGRAPHY_VARIANTS.P,
  className,
}: Props) => {
  const Component = variant;

  return (
    <Component className={clsx(VARIANT_STYLES[variant], className)}>
      {text}
    </Component>
  );
};
