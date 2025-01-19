import { COLORS } from "../utils/colors";

export const theme = {
  token: {
    colorPrimary: COLORS.PRIMARY_RED,
  },
  components: {
    Segmented: {
      itemActiveBg: "#fff",
      itemSelectedColor: "#fff",
      itemSelectedBg: COLORS.PRIMARY_RED,
      trackPadding: 4,
    },
    Progress: {
      circleTextFontSize: 18,
      circleTextColor: COLORS.PRIMARY_RED,
      defaultColor: COLORS.PRIMARY_RED,
      remainingColor: COLORS.TEXT_GREY,
    },
  },
};
