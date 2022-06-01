import { typography } from "../../theme/typography";
import { colors } from "../../theme/colors";

const BASE = {
  fontFamily: typography.regular,
  fontSize: 16,
  color: colors.liteViolet,
};

const BASE_BOLD = {
  fontFamily: typography.medium,
  fontSize: 17,
  color: colors.liteViolet,
};

const BOLD = {
  fontFamily: typography.bold,
  color: colors.deepBlue,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 22,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
