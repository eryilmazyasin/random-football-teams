import { up, down, Breakpoints } from "<src>/utils/mq";
import { css } from "@emotion/css";

export default {
  generateButton: css`
    color: #424242;
    margin-top: 50px;
    padding: 10px 50px;
    border-color: #ffffffa8;
    border-radius: 30px;

    background-image: linear-gradient(
      to right,
      #d5d5d5 0%,
      #f7f7f7 51%,
      #ffffff 100%
    );

    transition: 0.5s;
    background-size: 200% auto;

    &:hover {
      background-color: rgb(255 255 255 / 15%);
      border: 1px solid #ffffff;
      background-position: right center; /* change the direction of the change here */
      text-decoration: none;
      box-shadow: 0 0 10px #eee;
    }
  `,
};
