export enum TYPOGRAPHY_VARIANTS {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
  SPAN = "span",
}

export const VARIANT_STYLES: Record<TYPOGRAPHY_VARIANTS, string> = {
  [TYPOGRAPHY_VARIANTS.H1]: "text-5xl font-bold",
  [TYPOGRAPHY_VARIANTS.H2]: "text-4xl font-extrabold",
  [TYPOGRAPHY_VARIANTS.H3]: "text-center text-3xl font-bold text-gray-800",
  [TYPOGRAPHY_VARIANTS.H4]: "text-2xl font-semiBold",
  [TYPOGRAPHY_VARIANTS.H5]: "text-xl font-medium",
  [TYPOGRAPHY_VARIANTS.H6]: "text-lg text-gray-800",
  [TYPOGRAPHY_VARIANTS.P]: "text-xl",
  [TYPOGRAPHY_VARIANTS.SPAN]: "text-sm text-gray-600",
};
