/** @jsxImportSource @emotion/react */

import { styles } from "./styles";
import searchIcon from "../../../public/assets/images/search.png";
import nemoImage from "/assets/images/nemo.png";

const ChannelPage = () => {
  return (
    <div css={styles.container}>
      <span css={styles.title}>우리 채널 찾아보기</span>
      <div css={styles.searchContainer}>
        <input
          css={styles.input}
          type='text'
          placeholder='우리 학교, 회사, 채널명으로 검색'
        />
        <img css={styles.img} src={searchIcon} alt='' />
      </div>
      <div css={styles.separator}></div>
      <span css={styles.suggestText}>
        채널이 없으신가요? 회사/학교 담당자에게 도입을 요청해보세요!
      </span>
      <button css={styles.button}>
        <img src='' alt='' /> {/* 링크 이미지 추가 해야함 */}
        <span css={styles.buttonText}>채널 소개 링크 복사</span>
      </button>
      <img css={styles.nemo} src={nemoImage} alt='' />
    </div>
  );
};

export default ChannelPage;
