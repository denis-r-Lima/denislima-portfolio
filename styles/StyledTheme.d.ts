import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pallet: {
      color: {
        primary: string;
        primaryLight: string;
        primaryVeryLight: string;
        secondary: string;
        secondaryLight: string;
        base: string;
        baseMedium: string;
        baseDark: string;
        background: string;
        backgroundDarker: string;
        backgroundSecondary: string;
      };
    };
    typography: {
      color: string;
    };
  }
}
