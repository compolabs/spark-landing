export const convertPxToRem = (
  px: number | string,
  baseFontSize: number = 16
): string => {
  let pixelValue: number;

  if (typeof px === "string") {
    pixelValue = parseFloat(px.replace("px", ""));
  } else {
    pixelValue = px;
  }

  return `${pixelValue / baseFontSize}rem`;
};
