import { css } from "@emotion/react";

const styles = {
  container: css`
    width: 660px;
    height: 600px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  header: css`
    width: 660px;
    height: 50px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #3c99ff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  title: css`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  `,

  main: css`
    width: 660px;
    height: 464px;
    padding: 20px 30px 30px;
    display: flex;
    flex-direction: column;
  `,

  footer: css`
    width: 660px;
    height: 86px;
    padding-left: 30px;
    padding-right: 30px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #f4f6fa;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  selectedFriendContainer: css`
    width: 490px;
    height: 52px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  `,

  selectedFriendTitle: css`
    opacity: 0.5;
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  `,

  selectedFriendList: css`
    width: 490px;
    height: 30px;
    display: flex;
    align-items: center;
  `,

  selectedFriendItem: css`
    width: 134px;
    height: 30px;
    margin-right: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  `,

  profileContainer: css`
    display: flex;
    align-items: center;
  `,

  profileImage: css`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 15px;
  `,

  selectedUserName: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: normal;
    text-align: left;
    white-space: nowrap;
    color: #000;
  `,

  cancelIcon: css`
    width: 16px;
    height: 16px;
    object-fit: contain;
    cursor: pointer;
  `,

  addButton: css`
    width: 106px;
    height: 46px;
    border-radius: 5px;
    background-color: #08f;
  `,

  addButtonText: css`
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
};

export { styles };
