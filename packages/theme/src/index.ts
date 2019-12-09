import * as rhythm from "rhythm-fns";

export const FONT_SIZE = 16;
export const LINE_SCALE = 1.5;
export const LINE_SIZE = FONT_SIZE * LINE_SCALE;

export const getBoxHeight = (height: number) => rhythm.getBoxHeight(FONT_SIZE, LINE_SCALE, height);
export const getBoxMargin = (height: number, margin: number) =>
  rhythm.getBoxMargin(FONT_SIZE, LINE_SCALE, height, margin);
export const getLineHeight = (fontSize: number) =>
  rhythm.getLineHeight(FONT_SIZE, LINE_SCALE, fontSize);
export const getLineMargin = (margin: number, border: number) =>
  rhythm.getLineMargin(FONT_SIZE, LINE_SCALE, margin, border);

const THEME = {
  // COLORS
  // ---
  // Product
  colorProductLight: "#ECF8F7",
  colorProductLightHover: "#D6F0EE",
  colorProductLightActive: "#C0E8E4",
  colorProductNormal: "#00A991",
  colorProductNormalHover: "#009882",
  colorProductNormalActive: "#008F7B",
  colorProductDark: "#007F6D",
  colorProductDarkHover: "#007060",
  colorProductDarkActive: "#006657",
  colorProductDarker: "#005C4E",
  // White
  colorWhite: "#FFFFFF",
  colorWhiteHover: "#F1F4F7",
  colorWhiteActive: "#E7ECF1",
  // Cloud
  colorCloudLight: "#F5F7F9",
  colorCloudLightHover: "#E5EAEF",
  colorCloudLightActive: "#D6DEE6",
  colorCloudNormal: "#E8EDF1",
  colorCloudNormalHover: "#D9E1E8",
  colorCloudNormalActive: "#CAD5DF",
  colorCloudDark: "#E8EDF1",
  // Ink
  colorInkLight: "#BAC7D5",
  colorInkLightHover: "#A6B6C8",
  colorInkLightActive: "#94A8BE",
  colorInkNormal: "#5F738C",
  colorInkNormalHover: "#52647A",
  colorInkNormalActive: "#465567",
  colorInkDark: "#252A31",
  colorInkDarkHover: "#181B20",
  colorInkDarkActive: "#0B0C0F",
  // Green
  colorGreenLight: "#EBF4EC",
  colorGreenLightHover: "#D7EAD9",
  colorGreenLightActive: "#C3DFC7",
  colorGreenNormal: "#28A138",
  colorGreenNormalHover: "#238B31",
  colorGreenNormalActive: "#1D7228",
  colorGreenDark: "#235C2B",
  colorGreenDarkHover: "#1B4621",
  colorGreenDarkActive: "#123016",
  colorGreenDarker: "#235C2B",
  // Orange
  colorOrangeLight: "#FDF0E3",
  colorOrangeLightHover: "#FAE2C7",
  colorOrangeLightActive: "#F8D3AB",
  colorOrangeNormal: "#F9971E",
  colorOrangeNormalHover: "#F38906",
  colorOrangeNormalActive: "#D67906",
  colorOrangeDark: "#8E2A06",
  colorOrangeDarkHover: "#712105",
  colorOrangeDarkActive: "#531904",
  colorOrangeDarker: "#842706",
  // Red
  colorRedLight: "#FAEAEA",
  colorRedLightHover: "#F4D2D2",
  colorRedLightActive: "#EEB9B9",
  colorRedNormal: "#D21C1C",
  colorRedNormalHover: "#B91919",
  colorRedNormalActive: "#9D1515",
  colorRedDark: "#760909",
  colorRedDarkHover: "#5A0707",
  colorRedDarkActive: "#3E0505",
  colorRedDarker: "#760909",
  // Blue
  colorBlueLight: "#E5F7FF",
  colorBlueLightHover: "#C7EEFF",
  colorBlueLightActive: "#A8E5FF",
  colorBlueNormal: "#0172CB",
  colorBlueNormalHover: "#0161AC",
  colorBlueNormalActive: "#01508E",
  colorBlueDark: "#004680",
  colorBlueDarkHover: "#003561",
  colorBlueDarkActive: "#002442",
  colorBlueDarker: "#004680",
  // FONT
  // ---
  fontFamily: '"Helvetica Neue", "Calibri Light", sans-serif',
  // Z-INDEX
  // ---
  zBackground: -1,
  zNavbar: 700,
  zModal: 800,
  zOverlay: 900,
  zTooltip: 1000,
};

export type Theme = typeof THEME;

export type Palette = {
  colorProductLight: string;
  colorProductLightHover: string;
  colorProductLightActive: string;
  colorProductNormal: string;
  colorProductNormalHover: string;
  colorProductNormalActive: string;
  colorProductDark: string;
  colorProductDarkHover: string;
  colorProductDarkActive: string;
  colorProductDarker: string;
};

export const makeTheme = (palette: Palette | Theme): Theme => ({
  ...THEME,
  ...palette,
});

export type ThemeProps = {
  theme: Theme;
};

export default THEME;
