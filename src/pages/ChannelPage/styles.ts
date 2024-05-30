import { css } from "@emotion/react";

const styles = {
  container: css`
    width: 620px;
    height: fit-content;
    padding: 30px 40px;
    border-radius: 10px;
    border: solid 1px #e5e8f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `,
  title: css`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  searchContainer: css`
    width: 540px;
    height: 40px;
    margin-top: 20px;
    padding: 8px 15px;
    border-radius: 20px;
    background-color: #f4f6fa;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  input: css`
    width: 480px;
    height: 24px;
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    border: none;
    outline: none;
    background-color: #f4f6fa;

    &::placeholder {
      opacity: 0.5;
      font-family: "Pretendard";
      font-size: 13px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.54;
      letter-spacing: normal;
      color: #000;
    }
  `,
  img: css`
    width: 24px;
    height: 24px;
    object-fit: contain;
  `,
  separator: css`
    width: 540px;
    height: 1px;
    margin-top: 30px;
    border-radius: 0.5px;
    background-color: #e5e8f0;
  `,
  suggestText: css`
    margin-top: 29px;
    opacity: 0.5;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: center;
    color: #000;
  `,
  button: css`
    position: relative;
    width: 260px;
    height: 46px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #08f;
  `,
  linkIconContainer: css`
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    position: absolute;
    top: 15px;
    left: 15px;
  `,
  buttonText: css`
    font-family: "Pretendard";
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  `,
  nemo: css`
    position: absolute;
    right: 15px;
    bottom: 15px;
  `,
};

export { styles };
