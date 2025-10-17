export const colors = {
  navy: '#1E1B54',
  green: '#00703C',
  greenHover: '#00894E',
  white: '#FFFFFF',
  black: '#000000',
  gray800: '#333333',
  ocean: '#2E8BC0',
} as const;

export const theme = {
  colors,
  semantic: {
    backgroundPage: colors.white,
    textBody: colors.black,
    textMuted: colors.gray800,
    navBackground: colors.navy,
    navText: colors.white,
    buttonPrimaryBg: colors.green,
    buttonPrimaryHoverBg: colors.greenHover,
    buttonAccentBg: colors.navy,
    highlight: colors.navy,
  },
} as const;

export type Theme = typeof theme;


