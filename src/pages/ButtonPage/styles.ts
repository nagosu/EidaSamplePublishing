import { css } from "@emotion/react";

const styles = {
  historyButton: css`
    width: 101px;
    height: 30px;
    border-radius: 15px;
    border: solid 1px #08f;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  `,

  historyButtonText: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.15;
    letter-spacing: normal;
    color: #000;
  `,

  rightArrow: css`
    width: 12px;
    height: 12px;
    object-fit: contain;
  `,

  modeButtonContainer: css`
    width: 396px;
    height: 30px;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
  `,

  modeButtonActive: css`
    width: 198px;
    height: 30px;
    background-color: #3c9aff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  modeButton: css`
    width: 198px;
    height: 30px;
    background-color: #d7ddeb;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  modeButtonTextActive: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  `,

  modeButtonText: css`
    opacity: 0.5;
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
};

export { styles };
