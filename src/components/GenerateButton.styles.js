import { up, down, Breakpoints } from "<src>/utils/mq";
import { css } from "@emotion/css";

export default {
  generateButton: css`
    color: white;
    margin-top: 50px;
    padding: 10px 50px;
    border-color: #ffffffa8;
    border-radius: 30px;

    background-image: linear-gradient(
      to right,
      #4752e5 0%,
      #0a0a6a 51%,
      #1cd8d2 100%
    );

    transition: 0.5s;
    background-size: 200% auto;

    &:hover {
      background-color: rgb(255 255 255 / 15%);
      border: 1px solid #ffffff;
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
      box-shadow: 0 0 20px #eee;
    }
  `,
};
