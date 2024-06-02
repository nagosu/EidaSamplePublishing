/** @jsxImportSource @emotion/react */

import { styles } from "./styles";
import closeWhiteIcon from "/assets/images/close_white.svg";
import rightArrowWhite from "/assets/images/right_arrow_white.png";
import crab from "/assets/images/crab90.png";
import nemo from "/assets/images/nemo90.png";
import turtle from "/assets/images/turtle90.png";
import dolphin from "/assets/images/dolphin90.png";
import shark from "/assets/images/shark90.png";
import seahorse from "/assets/images/seahorse90.png";

// 서버명
const servers = ["크랩", "니모", "터틀", "크랩", "니모", "해마"];

// 동물 이미지
const animalImages = [crab, nemo, turtle, dolphin, shark, seahorse];

// 콘텐츠 색상
const contentColor = [
  "ffddce",
  "ffe5d4",
  "d8ecdf",
  "d0ecf8",
  "cce1ff",
  "ffd5d5",
];

// 그림자 색상
const shadowColor = [
  "efc5b2",
  "ffd7bb",
  "bddcc7",
  "b6dae9",
  "b1c9ec",
  "f1bebe",
];

const ServerPage = () => {
  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <span css={styles.headerTitle}>서버 선택</span>
        <div css={styles.cancelIconContainer}>
          <img src={closeWhiteIcon} alt='' />
        </div>
      </div>
      <div css={styles.content}>
        {servers.map((server, index) => (
          <div
            css={[
              styles.serverItem,
              { backgroundColor: `#${contentColor[index]}` },
            ]}
            key={index}
          >
            <div css={styles.serverItemContent}>
              <div css={styles.serverInfo}>
                <div css={styles.serverTitleContainer}>
                  <span css={styles.serverTitle}>{server}</span>
                  <div css={styles.channelNumber}>
                    <span css={styles.channelTitle}>채널 1</span>
                  </div>
                </div>
                <span css={styles.serverDescription}>
                  레벨 x 이상만 입장 가능
                </span>
              </div>
              <div css={styles.enterButtonContainer}>
                <img css={styles.rightArrow} src={rightArrowWhite} alt='' />
              </div>
            </div>
            <div
              css={[
                styles.serverItemShadow,
                { backgroundColor: `#${shadowColor[index]}` },
              ]}
            ></div>
            <div css={styles.animalContainer}>
              <img src={animalImages[index]} alt='' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerPage;
