import 'styled-components'

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primay: string;
      secundary: string;

      background: string;
      text: string;
    };
  }
}
