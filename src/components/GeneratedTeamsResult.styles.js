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

    & .logoAndName {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      text-align: center;
      max-width: 170px;
      max-height: 170px;

      ${down(Breakpoints.md)} {
        max-width: 130px;
        max-height: 130px;
      }

      & .logo {
        background: linear-gradient(45deg, #102f5a, transparent);
        border-radius: 50%;
        max-width: 170px;
        max-height: 170px;
        min-width: 170px;
        min-height: 170px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all ease 0.2s;

        ${down(Breakpoints.md)} {
          max-width: 130px;
          max-height: 130px;
          min-width: 130px;
          min-height: 130px;
        }
      }
    }

    img:not(.versus) {
      max-width: 150px;
      max-height: 150px;
      object-fit: contain;
      padding: 20px;

      ${down(Breakpoints.md)} {
        max-width: 120px;
        max-height: 120px;
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

    &[data-is-calculated="true"] {
      & .logo {
        box-shadow: 0 0 20px 5px #234b817d;
      }
    }
  `,
  noResult: css`
    padding: 60px 0;
    font-weight: 300;
    font-size: 18px;
  `,
};
