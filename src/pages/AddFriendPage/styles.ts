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
    width: 100%;
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
    width: 100%;
    height: 464px;
    padding: 20px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  mainContent: css`
    width: 600px;
    height: 414px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  buttonContainer: css`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  activeModeButton: css`
    width: 198px;
    height: 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #3c9aff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  modeButton: css`
    width: 198px;
    height: 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #d7ddeb;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  modeButtonText: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  `,

  nicknameSearchContainer: css`
    width: 600px;
    height: 375px;
    padding-top: 21px;
    padding-left: 15px;
    padding-right: 15px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: solid 1px #e5e8f0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  searchContainer: css`
    width: 570px;
    height: 40px;
    padding: 8px 15px;
    border-radius: 20px;
    background-color: #f4f6fa;
    display: flex;
    align-self: start;
    justify-content: space-between;
    position: relative;
  `,

  searchInput: css`
    width: 500px;
    height: 24px;
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: normal;
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

  searchIcon: css`
    width: 24px;
    height: 24px;
    object-fit: contain;
  `,

  searchResultContainer: css`
    width: 100%;
    height: 400px;
    padding-top: 10px;
    border-radius: 10px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.08);
    background-color: #fff;
    position: absolute;
    z-index: 1000;
    top: 50px;
    left: 0;
    overflow-y: hidden;
  `,

  searchResultList: css`
    width: 100%;
    height: 390px;
    display: flex;
    flex-direction: column;
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

  searchResultItem: css`
    width: 100%;
    min-height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,

  searchResultItemActive: css`
    width: 100%;
    min-height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #f4f6fa;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,

  searchProfileItem: css`
    width: auto;
    min-height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,

  nicknameScroll: css`
    width: 570px;
    height: 315px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
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

  profileItem: css`
    width: auto;
    min-height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
  `,

  profileImageWrapper: css`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `,

  profileImage: css`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
  `,

  profileStatus: css`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    border: solid 1px #fff;
    background-color: #14e14b;
    position: absolute;
    bottom: 0;
    right: 0;
  `,

  profileLevel: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #ecb24e;
    margin-right: 5px;
  `,

  highlighText: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #08f;
  `,

  profileNickName: css`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  `,

  footer: css`
    width: 100%;
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
    width: 480px;
    height: 30px;
    display: flex;
    align-items: center;
    overflow: hidden;
  `,

  selectedFriendItem: css`
    min-width: 134px;
    height: 30px;
    margin-right: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  `,

  selectedProfileContainer: css`
    display: flex;
    align-items: center;
  `,

  selectedProfileImage: css`
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
