import { css } from "@emotion/react";

const styles = {
  reportContainer: css`
    width: 850px;
    height: auto;
    padding: 30px;
    border-radius: 10px;
    border: solid 1px #97c7ff;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  `,
  reportHeader: css`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  reportHeaderLeft: css`
    display: flex;
    align-items: center;
    gap: 15px;
  `,
  userImage: css`
    width: 56px;
    height: 56px;
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `,
  userInfoContainer: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  `,
  userName: css`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  userGrade: css`
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #08f;
  `,
  reportHeaderRight: css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  `,
  submitContainer: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  submitText: css`
    opacity: 0.5;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  submitTextDivider: css`
    width: 1px;
    height: 8px;
    opacity: 0.3;
    background-color: #000;
  `,
  buttonContainer: css`
    display: flex;
    align-items: center;
    gap: 5px;
  `,
  editButton: css`
    width: 120px;
    height: 32px;
    border-radius: 5px;
    border: solid 1px #e5e8f0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `,
  editButtonText: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #a8b2cc;
  `,
  saveButton: css`
    width: 120px;
    height: 32px;
    border-radius: 5px;
    border: solid 1px #08f;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  saveButtonText: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #08f;
  `,
  reportInfo: css`
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: #e9f3ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 20px;
    margin-top: 32px;
  `,
  infoTitleContainer: css`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  infoImageContainer: css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    background-color: #fff;
    overflow: hidden;
  `,
  infoMainContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  `,
  infoMainTitle: css`
    font-family: "Pretendard";
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  infoMainSubContainer: css`
    display: flex;
    align-items: center;
    gap: 5px;
  `,
  infoDot: css`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    opacity: 0.5;
    background-color: #000;
  `,
  infoMainSubTitle: css`
    opacity: 0.5;
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #000;
  `,
  infoScore: css`
    font-family: "Pretendard";
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #08f;
    margin-right: 10px;
  `,
  infoDivider: css`
    width: 100%;
    height: 1px;
    opacity: 0.1;
    border-radius: 0.5px;
    background-color: #000;
    margin-top: 20px;
  `,
  infoTextContainer: css`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 11px;
  `,
  infoText: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: normal;
    color: #000;
  `,
  evaluationContainer: css`
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  `,
  evaluationHeader: css`
    width: 100%;
    height: 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #eef1f8;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  evaluationTitle: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  evaluationItem: css`
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 1px solid #e5e8f0;
  `,
  evaluationItemTitle: css`
    width: 130px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  evaluationText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,
  evaluationDescription: css`
    width: 660px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
  `,
  evaluationScoreContainer: css`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `,
  evaluationScore: css`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: #eef1f8;
  `,
  evaluationScoreItem: css`
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid #e5e8f0;
  `,
  evaluationScoreText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,
  evaluationWrapText: css`
    width: 590px;
    height: auto;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    white-space: normal;
    color: #000;
  `,
  areaLevelContainer: css`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `,
  areaLevelHeader: css`
    width: 100%;
    height: 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #eef1f8;
    display: flex;
  `,
  areaHeader: css`
    width: 289px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  LevelHeader: css`
    width: 501px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  headerText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,
  abilityContainer: css`
    width: 100%;
    height: 120px;
    display: flex;
  `,
  titleContainer: css`
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #e5e8f0;
    border-bottom: 1px solid #e5e8f0;
  `,
  areaLevelText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,
  subContainer: css`
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  areaLevelItem: css`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e5e8f0;
    border-right: 1px solid #e5e8f0;
  `,
  scoreContainer: css`
    width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  levelContainer: css`
    width: 501px;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  skillContainer: css`
    width: 100%;
    height: 80px;
    display: flex;
  `,
  graphContainer: css`
    width: 100%;
    height: 464px;
    border-radius: 10px;
    border: solid 1px #e5e8f0;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  `,
  testGraphContainer: css`
    width: 354px;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  testGraphHeader: css`
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  testGraphTitle: css`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  monthContainer: css`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
  monthItem: css`
    display: flex;
    align-items: center;
    gap: 5px;
  `,
  dotFirst: css`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #08f;
  `,
  dotSecond: css`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #ff4376;
  `,
  monthText: css`
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  chartContainer: css`
    width: 100%;
    height: 295px;
    margin-top: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f7fa;
  `,
  lastResultContainer: css`
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
  `,
  lastResultTitle: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,
  dropdownContainer: css`
    width: 225px;
    height: 100%;
    border-radius: 5px;
    background-color: #f4f6fa;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  dropdownText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,
  dropdownArrow: css`
    width: 12px;
    height: 12px;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  descriptionContainer: css`
    width: 356px;
    height: 100%;
    padding: 20px 42px 191px 20px;
    border-radius: 5px;
    background-color: #f4f6fa;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  descriptionTitle: css`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
    margin-bottom: 15px;
  `,
  descriptionCol: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  `,
  descriptionItem: css`
    display: flex;
    align-items: flex-start;
    gap: 10px;
  `,
  descriptionDot: css`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #08f;
    margin-top: 6px;
  `,
  descriptionText: css`
    width: 280px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,
  progressContainer: css`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `,
  progressHeader: css`
    width: 100%;
    height: 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #eef1f8;
    display: flex;
  `,
  numberHeader: css`
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  progressHeaderTitle: css`
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    color: #000;
  `,
  progressLevelHeader: css`
    width: 600px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 17px;
  `,
  rateHeader: css`
    width: 130px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  progressItemContainer: css`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  `,
  progressItem: css`
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 1px solid #e5e8f0;
  `,
  progressNumber: css`
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  progressLevel: css`
    width: 600px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 17px;
  `,
  progressRate: css`
    width: 130px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  progressText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,
  levelImage: css`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-right: 10px;
  `,
};

export { styles };
