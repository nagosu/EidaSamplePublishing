import { css } from "@emotion/react";

const styles = {
  container: css`
    width: 1400px;
    height: 600px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 1200px) {
      width: 660px;
    }
  `,
  header: css`
    position: relative;
    width: 100%;
    height: 50px;
    background-color: #3c99ff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  content: css`
    width: 100%;
    height: calc(100% - 50px);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 130px;
    grid-gap: 16px 15px;
    padding: 30px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  headerTitle: css`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  `,
  cancelIconContainer: css`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
  serverItem: css`
    position: relative;
    width: 436px;
    height: 130px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
      width: 292px;
    }
  `,
  serverItemContent: css`
    position: relative;
    width: 100%;
    height: calc(100% - 15px);
    padding: 21px 30px;
    display: flex;
    align-self: center;
  `,
  serverInfo: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  `,
  serverTitleContainer: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  serverTitle: css`
    font-family: "Pretendard";
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  channelNumber: css`
    width: 48px;
    height: 23px;
    border-radius: 11.5px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  channelTitle: css`
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  `,
  serverDescription: css`
    opacity: 0.7;
    font-family: "Pretendard";
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #000;
  `,
  enterButtonContainer: css`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 15px;
    right: 15px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  rightArrow: css`
    width: 13px;
  `,
  serverItemShadow: css`
    width: 100%;
    height: 15px;
  `,
  animalContainer: css`
    position: absolute;
    width: 90px;
    height: 90px;
    bottom: 0;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export { styles };
