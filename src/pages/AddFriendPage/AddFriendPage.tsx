/** @jsxImportSource @emotion/react */

import { styles } from "./styles";
import sampleImage from "../../../public/assets/images/sampleImage.jpeg";
import cancelIcon from "../../../public/assets/images/cancel.png";

const AddFriendPage = () => {
  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <span css={styles.title}>친구 추가</span>
        {/* 닫기 이미지 추가 해야함 */}
      </div>
      <div css={styles.main}></div>
      <div css={styles.footer}>
        <div css={styles.selectedFriendContainer}>
          <span css={styles.selectedFriendTitle}>선택된 친구</span>
          <div css={styles.selectedFriendList}>
            <div css={styles.selectedFriendItem}>
              <div css={styles.profileContainer}>
                <img css={styles.profileImage} src={sampleImage} alt='' />
                <span css={styles.selectedUserName}>귀여운게최고</span>
              </div>
              <img css={styles.cancelIcon} src={cancelIcon} alt='' />
            </div>
            <div css={styles.selectedFriendItem}>
              <div css={styles.profileContainer}>
                <img css={styles.profileImage} src={sampleImage} alt='' />
                <span css={styles.selectedUserName}>코딩꿈나무</span>
              </div>
              <img css={styles.cancelIcon} src={cancelIcon} alt='' />
            </div>
            <div css={styles.selectedFriendItem}>
              <div css={styles.profileContainer}>
                <img css={styles.profileImage} src={sampleImage} alt='' />
                <span css={styles.selectedUserName}>오늘도힘차게</span>
              </div>
              <img css={styles.cancelIcon} src={cancelIcon} alt='' />
            </div>
          </div>
        </div>
        <button css={styles.addButton}>
          <span css={styles.addButtonText}>추가하기</span>
        </button>
      </div>
    </div>
  );
};

export default AddFriendPage;
