/** @jsxImportSource @emotion/react */

import { styles } from "./styles";
import rightArrowCircle from "/assets/images/right_arrow_circle.png";
import thumbnailSample from "/assets/images/thumbnail_sample.jpg";
import filledStarIcon from "/assets/images/star_yellow.svg";
import emptyStarIcon from "/assets/images/star.svg";
import authorSample from "/assets/images/author_sample.png";
import rightArrowIcon from "/assets/images/right_arrow_white.png";
import bannerImage from "/assets/images/banner_image.png";

const BannerPage = () => {
  const fillStars = Array(4).fill(filledStarIcon); // 채워진 별 아이콘
  const emptyStars = Array(1).fill(emptyStarIcon); // 빈 별 아이콘

  return (
    <>
      {/* 배너 */}
      <div css={styles.bannerContainer}>
        <div css={styles.bannerContent}>
          <div css={styles.bannerTitleContainer}>
            <span css={styles.bannerSubTitle}>제 19회</span>
            <span css={styles.bannerTitle}>에이다코딩 프로그래밍 경시대회</span>
          </div>
          <div css={styles.buttonContainer}>
            <button css={styles.enterButtonContainer}>
              <span css={styles.buttonText}>입장하기</span>
              <div css={styles.rightArrow}>
                <img src={rightArrowIcon} alt='' />
              </div>
            </button>
            <button css={styles.roomInfoButtonContainer}>
              <span css={styles.buttonText}>방정보 보기</span>
            </button>
          </div>
        </div>
        <img css={styles.bannerImage} src={bannerImage} alt='' />
      </div>

      {/* 강의 목록 */}
      <div css={styles.lectureContainer}>
        <div css={styles.lectureHeader}>
          <span css={styles.lectureTitle}>인기 강의</span>
          <div css={styles.listAllContainer}>
            <span css={styles.listAllText}>전체보기</span>
            <img src={rightArrowCircle} alt='' />
          </div>
        </div>
        <div css={styles.letcureListContainer}>
          {[1, 2, 3, 4].map((item) => (
            <div css={styles.lectureItem}>
              <div css={styles.lectureThumbnailContainer}>
                <img src={thumbnailSample} alt='' />
              </div>
              <div css={styles.lectureItemTitle}>
                챗GPT 사용법 (chatGPT 가입 방법, 프롬프트 작성 팁, API활용사례)
              </div>
              <div css={styles.rateContainer}>
                <div css={styles.starContainer}>
                  {fillStars.map((star, index) => (
                    <div css={styles.starItem} key={`fill-${index}`}>
                      <img src={star} alt='Filled Star' />
                    </div>
                  ))}
                  {emptyStars.map((star, index) => (
                    <div css={styles.starItem} key={`empty-${index}`}>
                      <img src={star} alt='Empty Star' />
                    </div>
                  ))}
                </div>
                <span css={styles.rateText}>(45)</span>
              </div>
              <div css={styles.authorContainer}>
                <div css={styles.authorImageContainer}>
                  <img src={authorSample} alt='' />
                </div>
                <span css={styles.authorName}>코드모스</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BannerPage;
