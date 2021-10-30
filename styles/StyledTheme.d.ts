import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pallet: {
      color: {
        primary: string;
        primaryLight: string;
        secondary: string;
        secondaryLight: string;
        base: string;
        baseDark: string;
      };
    };
    typography: {
      color: string;
    };
  }
}
