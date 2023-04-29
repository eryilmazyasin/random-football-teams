import { up, down, Breakpoints } from "<src>/utils/mq";
import { css } from "@emotion/css";

export default {
  liguesSelectWrapper: css`
    & .MuiInputBase-root {
      max-width: 350px;
      min-width: 350px;
      /* min-height: 65px; */
    }
    & .MuiFormLabel-root {
      /* top: 5px; */
    }

    & .MuiChip-root {
      font-size: 12px;
      height: 23px;
    }
  `,
};
