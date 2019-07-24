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
  colorProductLight: "#E9A6F5",
  colorProductLightHover: "#AC7BB5",
  colorProductLightActive: "#D195DB",
  colorProductNormal: "#D094D9",
  colorProductNormalHover: "#DC9CE6",
  colorProductNormalActive: "#B782BF",
  colorProductDark: "#926899",
  colorProductDarkHover: "#644769",
  colorProductDarkActive: "#553D59",
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
  // Ink
  colorInkPrimary: "#353B50",
  colorInkSecondary: "#717581",
  colorInkGrey: "#4A4A4A",
  colorInkLink: "#518996",
  // Button
  colorButtonProductNormal: "#16BAC5",
  colorButtonProductHover: "#16BAC5",
  colorButtonProductActive: "#119FA9",
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
  // TRANSITIONS
  // ---
  transitionDefault: "0.25s ease-in-out",
  // BOX
  // ---
  boxShadowDefault: "rgba(131, 134, 163, 0.15) 0 8px 13px 0",
  boxShadowNavbar: "rgba(131, 134, 163, 0.7) 0 8px 13px 0",
  boxShadowAmenityIconPreview: "rgba(131, 134, 163, 0.1) 0 0 20px 1px",
  boxBorderRadiusNormal: "2px",
  boxBorderRadiusBig: "4px",
  boxBorderNormal: "solid 1px black",
  boxPlaceholder: "rgba(128, 128, 128, 0.1)",
  // FONT
  // ---
  fontFamily: '"Helvetica Neue", "Calibri Light", sans-serif',
  fontWeightLight: "100",
  fontWeightNormal: "normal",
  fontWeightBold: "bold",
  // Z-INDEX
  // ---
  zBackground: -1,
  zNavbar: 700,
  zModal: 800,
  zOverlay: 900,
  zTooltip: 1000,
  // NAVBAR
  // ---
  navbarIconHeight: "20px",
};

export type Theme = typeof THEME;

export type ThemeProps = {
  theme: Theme;
};

export default THEME;
