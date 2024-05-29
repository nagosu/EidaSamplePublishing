import { css } from "@emotion/react";

const styles = {
  wrap: css`
    width: 100%;
    padding: 30px 0;
    background-color: #f9fbff;
  `,
  container: css`
    width: 1350px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #e5e8f0;
    background-color: #eef1f8;
    border-radius: 15px;

    @media (max-width: 1349px) {
      width: 100%;
    }
  `,
  titleContainer: css`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1349px) {
      flex-direction: column;
      gap: 15px;
    }
  `,
  titleInfo: css`
    h3 {
      font-size: 20px;
      font-weight: 700;
      color: #000;
      margin-bottom: 6px;
    }
    h4 {
      font-size: 14px;
      font-weight: 500;
      color: #a8b2cc;
      margin-bottom: 0;
    }
  `,
  titleRightContainer: css`
    display: flex;
    align-items: center;
    gap: 50px;
  `,
  titleContentContainer: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  titleContent: css`
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    gap: 10px;

    &.heart {
      gap: 20px;
    }
    &.rank {
      gap: 30px;
    }
    &.point {
      gap: 60px;
    }
  `,
  titleBox: css`
    display: flex;
    align-items: center;
    gap: 5px;

    h5 {
      font-size: 14px;
      font-weight: 500;
      color: #000;
      margin-bottom: 0;
    }
  `,
  titleParagraph: css`
    font-size: 14px;
    font-weight: 600;
    color: #000;
    margin-bottom: 0;
    display: flex;
    gap: 2px;
  `,
  myResultContainer: css`
    width: 100%;
    height: 546px;
    padding: 20px 15px 21px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #e0e5ef;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  myResultTitleContainer: css`
    width: 104px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  `,
  myResultDot: css`
    width: 5px;
    height: 5px;
    background-color: #000;
    border-radius: 50%;
  `,
  myResultTitleText: css`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: normal;
    color: #000;
  `,
  myResultScore: css`
    width: 100%;
    height: 206px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  medalImage: css`
    width: 30px;
    height: 30px;
    object-fit: contain;
  `,
  characterContainer: css`
    min-width: 184px;
    height: 206px;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  characterHeader: css`
    width: 100%;
    height: 40px;
    background-color: #08f;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  profileWrapper: css`
    width: 160px;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  rowDiv: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `,
  profileImageContainer: css`
    width: 28px;
    height: 28px;
    border: solid 1px #e9e9e9;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  profileTitle: css`
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #fff;
  `,
  represent: css`
    width: 22px;
    height: 13px;
    border-radius: 6.5px;
    background-color: #a872d1;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  representText: css`
    font-family: "Pretendard";
    font-size: 7px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  `,
  characterContent: css`
    width: 100%;
    height: 166px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
  charImageContainer: css`
    width: 110px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  charInfo: css`
    width: 96px;
    height: 26px;
    border-radius: 13px;
    background-color: #e5e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  `,
  charInfoTextNo: css`
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  charInfoTextNickname: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  charInfoTextLevel: css`
    font-family: "Pretendard";
    font-size: 9px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #3970c1;
  `,
  scoreContainer: css`
    width: 1036px;
    height: 206px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  `,
  scoreList: css`
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  scoreItem: css`
    min-width: 89px;
    height: 100%;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  scoreItemContent: css`
    width: 100%;
    height: 106px;
    display: flex;
    flex-direction: column;
    padding: 5px;
  `,
  scoreItemContentHeader: css`
    width: 100%;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
  `,
  starContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  starRate: css`
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  searchIcon: css`
    width: 12px;
    height: 12px;
  `,
  scoreTextContainer: css`
    width: 100%;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  scoreText: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  `,
  scoreTextMain: css`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  scoreTextSub: css`
    opacity: 0.3;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  scoreItemFooter: css`
    width: 89px;
    height: 34px;
    background-color: #c9e2ff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  time: css`
    opacity: 0.8;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    color: #000;
  `,
  totalScoreContainer: css`
    width: 89px;
    height: 140px;
    border-radius: 5px;
    background-color: #08f;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  totalScoreTextContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
  `,
  totalScoreText: css`
    opacity: 0.8;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  `,
  totalScoreNumber: css`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  `,
  timePointResult: css`
    width: 100%;
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    background-color: #c9e2ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  timeContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  timeIconContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-right: 5px;
  `,
  timeText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: normal;
    color: #000;
    margin-right: 10px;
  `,
  timeNumber: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: normal;
    color: #000;
  `,
  pointContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  pointText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: normal;
    color: #000;
    margin-right: 62px;
  `,
  pointNumber: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: normal;
    color: #000;
    margin-right: 5px;
  `,
  pointIconContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
  `,
  graphContainer: css`
    width: 100%;
    height: 224px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-top: 31px;
    overflow: hidden;
  `,
  testGraphContainer: css`
    width: 200px;
    height: 100%;
    border-radius: 5px;
    border: solid 1px #e5e8f0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  testGraphHeader: css`
    width: 100%;
    height: 34px;
    background-color: #e9f3ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
  `,
  testGraphTitle: css`
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    color: #000;
  `,
  monthContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
  monthItem: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  `,
  monthColorFirst: css`
    width: 5px;
    height: 5px;
    background-color: #319fff;
    border-radius: 50%;
  `,
  monthColorSecond: css`
    width: 5px;
    height: 5px;
    background-color: #ff6bc9;
    border-radius: 50%;
  `,
  monthText: css`
    font-family: "Pretendard";
    font-size: 8px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.25;
    letter-spacing: normal;
    color: #000;
  `,
  testGraphContent: css`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  areaLevelContainer: css`
    width: 556px;
    height: 100%;
  `,
  areaLevelHeader: css`
    width: 100%;
    height: 34px;
    background-color: #e9f3ff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    display: flex;
  `,
  areaHeader: css`
    width: 190px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  levelHeader: css`
    width: 366px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  headerText: css`
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 3;
    letter-spacing: normal;
    color: #000;
  `,
  areaLevelContent: css`
    width: 100%;
    height: 150px;
    display: flex;
  `,
  areaContainer: css`
    width: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #e5e8f0;
  `,
  areaAbilityContainer: css`
    width: 100%;
    height: 90px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e5e8f0;
  `,
  areaSkillContainer: css`
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e5e8f0;
  `,
  areaText: css`
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 3;
    letter-spacing: normal;
    color: #000;
  `,
  areaSubContainer: css`
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #e5e8f0;
  `,
  areaSubItemContainer: css`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e5e8f0;
  `,
  areaSubItemText: css`
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 3;
    letter-spacing: normal;
    color: #000;
  `,
  areaScoreContainer: css`
    width: 41px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #e5e8f0;
  `,
  areaScoreItemContainer: css`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e5e8f0;
  `,
  areaScoreItemText: css`
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 3;
    letter-spacing: normal;
    color: #000;
  `,
  levelContainer: css`
    width: 366px;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  levelItemContainer: css`
    width: 100%;
    height: 30px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e5e8f0;
  `,
  sliderContainer: css`
    position: relative;
    width: 100%;
    height: 5px;
    border-radius: 2.5px;
    background-color: #f4f6fa;
  `,
  sliderTrack: (progress: number) => css`
    position: absolute;
    width: ${progress}%;
    height: 5px;
    border-radius: 2.5px;
    background-image: linear-gradient(to left, #7ad6ff 2%, #08f);
  `,
  sliderThumb: (progress: number) => css`
    position: absolute;
    transform: translate(-100%, -50%);
    top: 50%;
    left: ${progress}%;
    width: 26px;
    height: 16px;
    border-radius: 8px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: #73d1ff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  sliderThumbNumber: css`
    font-family: "Pretendard";
    font-size: 8px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  `,
  problemTypeContainer: css`
    width: 224px;
    height: 100%;
    border-radius: 5px;
    border: solid 1px #e5e8f0;
    display: flex;
    flex-direction: column;
  `,
  problemTypeHeader: css`
    width: 100%;
    height: 34px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #e9f3ff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  problemTypeTitle: css`
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    color: #000;
  `,
  problemTypeContent: css`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
  `,
  typeWrapper: css`
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 5px;
  `,
  typeContainer: css`
    width: auto;
    height: 19px;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 2px;
    background-color: #9980fa;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  typeText: css`
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  `,
  recommendContainer: css`
    width: 224px;
    height: 100%;
    border-radius: 5px;
    border: solid 1px #e5e8f0;
    display: flex;
    flex-direction: column;
  `,
  recommendHeader: css`
    width: 100%;
    height: 34px;
    border-radius: 5px;
    background-color: #e9f3ff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  recommendTitle: css`
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    color: #000;
  `,
  recommendContent: css`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  `,
  recommendScroll: css`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

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
  recommendItem: css`
    width: calc(100% - 10px);
    min-height: 44px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 5px;
    border-radius: 10px;
    background-color: #eef1f8;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  `,
  itemImage: css`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
  `,
  itemTitleContainer: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1px;
  `,
  itemTitle: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #000;
  `,
  itemSubTitle: css`
    opacity: 0.5;
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  contentContainer: css`
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  `,
  titleInnerContainer: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  `,
  title: css`
    font-size: 13px;
    font-weight: 500;
    color: #a8b2cc;
  `,
  optionContainer: css`
    display: flex;
    align-items: center;
    gap: 30px;
  `,
  userOption: css`
    font-size: 13px;
    font-weight: 500;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
  `,
  userListContainer: css`
    width: 100%;
    height: 678px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;

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
};

export { styles };
