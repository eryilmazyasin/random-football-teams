import { css } from "@emotion/css";
import { down, Breakpoints } from "<src>/utils/mq";

export default {
  generateTeamsWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin-top: 50px;

    ${down(Breakpoints.md)} {
      gap: 15px;
    }

    img:not(.versus) {
      width: 150px;
      height: 150px;
      object-fit: contain;
      background: linear-gradient(45deg, #102f5a, transparent);
      border-radius: 50%;
      padding: 20px;

      ${down(Breakpoints.md)} {
        width: 120px;
        height: 120px;
      }
    }

    & .versus {
      width: 70px;
      height: 100px;

      ${down(Breakpoints.md)} {
        width: 60px;
        height: 90px;
      }
    }
  `,
};
