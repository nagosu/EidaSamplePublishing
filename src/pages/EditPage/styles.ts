import { css } from "@emotion/react";

const styles = {
  container: css`
    width: 1400px;
    height: 800px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  header: css`
    width: 100%;
    height: 50px;
    background-color: #3c99ff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
  closeIcon: css`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 15px;
  `,
  content: css`
    width: 100%;
    height: calc(100% - 50px);
    padding: 30px 30px 110px 30px;
  `,
  tableHeader: css`
    width: 100%;
    height: 40px;
    display: flex;
    border-radius: 5px 5px 0px 0px;
    background-color: #eef1f8;
    overflow: hidden;
  `,
  headerEvaluation: css`
    width: 120px;
    height: 100%;
    background-color: #eef1f8;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  headerLevel: css`
    width: 350px;
    height: 100%;
    background-color: #eef1f8;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  headerGood: css`
    width: 270px;
    height: 100%;
    background-color: #eef1f8;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  headerBad: css`
    width: 270px;
    height: 100%;
    background-color: #eef1f8;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  headerType: css`
    width: 290px;
    height: 100%;
    background-color: #eef1f8;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  headerBlank: css`
    width: 40px;
    height: 100%;
    background-color: #eef1f8;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  tableText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,
  tableBodyContainer: css`
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `,
  tableBodyRow: css`
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 1px solid #e5e8f0;
  `,
  bodyEvaluation: css`
    width: 120px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #e5e8f0;
  `,
  bodyLevel: css`
    width: 350px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid #e5e8f0;
    padding: 0 15px;
  `,
  bodyGood: css`
    width: 270px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid #e5e8f0;
    padding: 0 15px;
  `,
  bodyBad: css`
    width: 270px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid #e5e8f0;
    padding: 0 15px;
  `,
  bodyType: css`
    width: 290px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid #e5e8f0;
    padding: 11px 15px;
    gap: 10px;
  `,
  dropdownContainer: css`
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 12px;
    border-radius: 5px;
    background-color: #f7f7f7;
    cursor: pointer;
  `,
  dropdownTitle: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.31;
    letter-spacing: normal;
    color: #000;
    opacity: 0.3;
  `,
  dropdownIconContainer: css`
    width: 14.1px;
    height: 14.1px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  dropdownSelectWrapper: css`
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 5px;
    align-items: center;
  `,
  dropdownSelectContainer: css`
    width: fit-content;
    height: 32px;
    padding: 0 12px;
    border-radius: 16px;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `,
  dropdownSelectTitle: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: normal;
    color: #000;
  `,
  dropdownDeleteContainer: css`
    width: 14px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  bodyDelete: css`
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  deleteContainer: css`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export { styles };
