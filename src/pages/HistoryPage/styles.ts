import { css } from "@emotion/react";

const styles = {
  historyContainer: css`
    width: 1020px;
    height: 561px;
    border-radius: 15px;
    border: solid 1px #e5e8f0;
    background-color: #eef1f8;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  historyHeader: css`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2px 0;
  `,
  historyTitle: css`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: normal;
    color: #000;
  `,
  historyHeaderRight: css`
    display: flex;
    align-items: center;
    gap: 30px;
  `,
  inputContainer: css`
    width: 200px;
    height: 26px;
    padding-left: 10px;
    padding-right: 5px;
    border-radius: 5px;
    background-color: #d7dbe6;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  inputBox: css`
    width: 160px;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    background-color: #d7dbe6;
    border: none;
    outline: none;

    &::placeholder {
      color: #a8b2cc;
    }
  `,
  searchButtonContainer: css`
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  buttonContainer: css`
    display: flex;
    gap: 10px;
  `,
  enterButtonContainer: css`
    width: 170px;
    height: 36px;
    border-radius: 6px;
    border: solid 1px #780067;
    background-color: #971785;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `,
  enterButton: css`
    width: 100%;
    height: 33px;
    border-radius: 6px;
    background-image: linear-gradient(to bottom, #ff8ee8, #d13fbd);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  makeButtonContainer: css`
    width: 170px;
    height: 36px;
    border-radius: 6px;
    border: solid 1px #0e2a60;
    background-color: #133c8b;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `,
  makeButton: css`
    width: 100%;
    height: 33px;
    border-radius: 6px;
    background-image: linear-gradient(to bottom, #82acfc, #537bc9);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  buttonText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  `,
  historyContent: css`
    width: 100%;
    height: 491px;
    border-radius: 5px;
    background-color: #fff;
    padding: 20px;
    padding-right: 4px;
  `,
  historyScroll: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 29px;
    padding-right: 16px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 3px;
      right: 10px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 2px;
      right: 10px;
    }

    &::-webkit-scrollbar-thumb {
      width: 3px;
      height: 27px;
      border-radius: 2px;
      background: #a8b2cc;
    }
  `,
  historyItem: css`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  historyDateContainer: css`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  historyTodayContainer: css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2px;
  `,
  historyDate: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,
  dotContainer: css`
    width: 4px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `,
  todayDot: css`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #ff4376;
  `,
  historyItemContent: css`
    width: 100%;
    height: 77px;
    border-radius: 10px;
    border: solid 1px #e5e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 20px;
  `,
  roomInfoContainer: css`
    display: flex;
    gap: 15px;
    align-items: center;
  `,
  roomNumberContainer: css`
    width: 38px;
    height: 42px;
    border-radius: 10px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: #8f9ab2;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  roomNumberTitle: css`
    font-family: "Pretendard";
    font-size: 15px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  `,
  roomTitleContainer: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  roomTitle: css`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #000;
  `,
  roomDescription: css`
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
  myInfoContainer: css`
    display: flex;
    gap: 10px;
    align-items: center;
  `,
  myInfoWrapper: css`
    width: 135px;
    height: 36px;
    border-radius: 5px;
    background-color: #eef1f8;
    padding-left: 10px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  myInfoLeft: css`
    display: flex;
    gap: 5px;
    align-items: center;
  `,
  iconContainer: css`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  myInfoTitle: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.31;
    letter-spacing: normal;
    color: #000;
  `,
  myInfoRight: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.31;
    letter-spacing: normal;
    color: #000;
  `,
};

export { styles };
