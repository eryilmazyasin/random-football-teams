import { up, down, Breakpoints } from "<src>/utils/mq";
import { css } from "@emotion/css";

export default {
  main: css`
    color: white;
    background: transparent;

    & .app-title {
      font-weight: 300;
      margin: 25px 0;

      font-size: 40px;

      ${down(Breakpoints.md)} {
        font-size: 30px;
      }
    }

    & .selectBoxesWrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    & .MuiInputBase-root {
      color: rgba(0, 0, 0, 0.6);
    }
  `,
};
