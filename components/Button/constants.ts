export enum BUTTON_VARIANTS {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const BASE_STYLES =
  "flex items-center justify-center w-full py-3 rounded-md focus:outline-none focus:ring-2";

export const VARIANT_STYLES: Record<BUTTON_VARIANTS, string> = {
  [BUTTON_VARIANTS.PRIMARY]:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  [BUTTON_VARIANTS.SECONDARY]:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};
