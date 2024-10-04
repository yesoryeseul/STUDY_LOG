import "@emotion/react";

import theme from "./theme";

type theme = typeof theme;

declare module "@emotion/react" {
  export type Theme = theme;
}
