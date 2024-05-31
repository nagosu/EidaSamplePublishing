/** @jsxImportSource @emotion/react */

import { styles } from "./styles";
import searchButton from "/assets/images/search.png";
import rankIcon from "/assets/images/rank.svg";

const HistoryPage = () => {
  return (
    <div css={styles.historyContainer}>
      <div css={styles.historyHeader}>
        <span css={styles.historyTitle}>내 전적보기</span>
        <div css={styles.historyHeaderRight}>
          <div css={styles.inputContainer}>
            <input
              css={styles.inputBox}
              type='text'
              placeholder='방 이름 또는 번호 검색'
            />
            <div css={styles.searchButtonContainer}>
              <img src={searchButton} alt='' />
            </div>
          </div>
          <div css={styles.buttonContainer}>
            <div css={styles.enterButtonContainer}>
              <button css={styles.enterButton}>
                <span css={styles.buttonText}>빠른 입장하기</span>
              </button>
            </div>
            <div css={styles.makeButtonContainer}>
              <button css={styles.makeButton}>
                <span css={styles.buttonText}>방 만들기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div css={styles.historyContent}>
        <div css={styles.historyScroll}>
          <div css={styles.historyItem}>
            <div css={styles.historyDateContainer}>
              <div css={styles.historyTodayContainer}>
                <span css={styles.historyDate}>오늘</span>
                <div css={styles.dotContainer}>
                  <div css={styles.todayDot}></div>
                </div>
              </div>
            </div>
            <div css={styles.historyItemContent}>
              <div css={styles.roomInfoContainer}>
                <div css={styles.roomNumberContainer}>
                  <span css={styles.roomNumberTitle}>5</span>
                </div>
                <div css={styles.roomTitleContainer}>
                  <span css={styles.roomTitle}>위캔코딩</span>
                  <span css={styles.roomDescription}>
                    매너 안지킬 시 바로 강퇴합니다.
                  </span>
                </div>
              </div>
              <div css={styles.myInfoContainer}>
                <div css={styles.myInfoWrapper}>
                  <div css={styles.myInfoLeft}>
                    <div css={styles.iconContainer}>
                      <span>❤️</span>
                    </div>
                    <span css={styles.myInfoTitle}>내 정보</span>
                  </div>
                  <span css={styles.myInfoRight}>89점</span>
                </div>
                <div css={styles.myInfoWrapper}>
                  <div css={styles.myInfoLeft}>
                    <div css={styles.iconContainer}>
                      <img src={rankIcon} alt='' />
                    </div>
                    <span css={styles.myInfoTitle}>내 등수</span>
                  </div>
                  <span css={styles.myInfoRight}>1위</span>
                </div>
              </div>
            </div>
          </div>
          <div css={styles.historyItem}>
            <div css={styles.historyDateContainer}>
              <div css={styles.historyTodayContainer}>
                <span css={styles.historyDate}>24.04.26</span>
              </div>
            </div>
            <div css={styles.historyItemContent}>
              <div css={styles.roomInfoContainer}>
                <div css={styles.roomNumberContainer}>
                  <span css={styles.roomNumberTitle}>11</span>
                </div>
                <div css={styles.roomTitleContainer}>
                  <span css={styles.roomTitle}>샵, 자폭, 스틸 허용방</span>
                  <span css={styles.roomDescription}>
                    매너 안지킬 시 바로 강퇴합니다.
                  </span>
                </div>
              </div>
              <div css={styles.myInfoContainer}>
                <div css={styles.myInfoWrapper}>
                  <div css={styles.myInfoLeft}>
                    <div css={styles.iconContainer}>
                      <span>❤️</span>
                    </div>
                    <span css={styles.myInfoTitle}>내 정보</span>
                  </div>
                  <span css={styles.myInfoRight}>89점</span>
                </div>
                <div css={styles.myInfoWrapper}>
                  <div css={styles.myInfoLeft}>
                    <div css={styles.iconContainer}>
                      <img src={rankIcon} alt='' />
                    </div>
                    <span css={styles.myInfoTitle}>내 등수</span>
                  </div>
                  <span css={styles.myInfoRight}>1위</span>
                </div>
              </div>
            </div>
            <div css={styles.historyItemContent}>
              <div css={styles.roomInfoContainer}>
                <div css={styles.roomNumberContainer}>
                  <span css={styles.roomNumberTitle}>7</span>
                </div>
                <div css={styles.roomTitleContainer}>
                  <span css={styles.roomTitle}>킵고잉하쟈아!</span>
                  <span css={styles.roomDescription}>
                    매너 안지킬 시 바로 강퇴합니다.
                  </span>
                </div>
              </div>
              <div css={styles.myInfoContainer}>
                <div css={styles.myInfoWrapper}>
                  <div css={styles.myInfoLeft}>
                    <div css={styles.iconContainer}>
                      <span>❤️</span>
                    </div>
                    <span css={styles.myInfoTitle}>내 정보</span>
                  </div>
                  <span css={styles.myInfoRight}>89점</span>
                </div>
                <div css={styles.myInfoWrapper}>
                  <div css={styles.myInfoLeft}>
                    <div css={styles.iconContainer}>
                      <img src={rankIcon} alt='' />
                    </div>
                    <span css={styles.myInfoTitle}>내 등수</span>
                  </div>
                  <span css={styles.myInfoRight}>1위</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
