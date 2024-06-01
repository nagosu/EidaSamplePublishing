import { css } from "@emotion/react";

const styles = {
  container: css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
  `,
  dolphinContainer: css`
    width: 200px;
    height: 234px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 50px;
  `,
};

export { styles };
