import { css } from "@emotion/css";
const versusImage = require("../../public/versus.png");

export default {
  main: css`
    color: white;
    background: transparent;

    & .app-title {
      font-weight: 300;
      margin: 25px 0;
    }

    & .selectBoxesWrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    & .generateTeamsWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;
      margin-top: 50px;

      img:not(.versus) {
        width: 150px;
        height: 150px;
        object-fit: contain;
        background: linear-gradient(45deg, #102f5a, transparent);
        border-radius: 50%;
        padding: 20px;
      }

      & .versus {
        width: 70px;
        height: 100px;
      }
    }
  `,
};
