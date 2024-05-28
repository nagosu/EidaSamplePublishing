/** @jsxImportSource @emotion/react */

import { useState } from "react";
import CheckBox from "../../components/commons/inputs/CheckBox";
import UserBattlePointBox from "../../components/layout/UserBattlePointBox";
import { styles } from "./styles";
import RadarChart from "../../components/commons/chart/RadarChart";
import medalImage from "/assets/images/medal.png";
import profileImage from "/assets/images/profile_img.svg";
import charImage from "/assets/images/char.svg";
import starIcon from "/assets/images/star_yellow.svg";
import searchIcon from "/assets/images/search.png";

const graphScore1 = [[0.8, 0.6, 0.7, 0.5, 0.9]];
const graphScore2 = [[0.5, 0.7, 0.6, 0.4, 0.8]];
const texts = ["타자연습", "문제풀이", "컴퓨팅 사고력", "수업태도", "스크래치"];

const USERS = [
  {
    user: {
      group: {
        profileImg: "profile_img.svg",
        name: "온리메타 자율학습단",
      },
      user: {
        name: "킵고잉",
        charImg: "char.svg",
        num: "134",
        level: "39",
      },
    },
    info: {
      rank: "1",
      total_time: "40:25",
      total_point: "800",
      total_score: "340",
      scores: [
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "7",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "15",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "6",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
      ],
    },
  },
  {
    user: {
      group: {
        profileImg: "profile_img.svg",
        name: "온리메타 자율학습단",
      },
      user: {
        name: "킵고잉임2",
        charImg: "char.svg",
        num: "134",
        level: "39",
      },
    },
    info: {
      rank: "2",
      total_time: "40:25",
      total_point: "800",
      total_score: "340",
      scores: [
        {
          star: "11",
          score1: "1",
          score2: "304",
          time: "05:25",
        },
        {
          star: "6",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "7",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "15",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "6",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
      ],
    },
  },
  {
    user: {
      group: {
        profileImg: "profile_img.svg",
        name: "온리메타 자율학습단",
      },
      user: {
        name: "킵고잉3",
        charImg: "char.svg",
        num: "134",
        level: "39",
      },
    },
    info: {
      rank: "3",
      total_time: "40:25",
      total_point: "800",
      total_score: "340",
      scores: [
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "7",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "15",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "6",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
      ],
    },
  },
  {
    user: {
      group: {
        profileImg: "profile_img.svg",
        name: "온리메타 자율학습단",
      },
      user: {
        name: "킵고잉",
        charImg: "char.svg",
        num: "134",
        level: "39",
      },
    },
    info: {
      rank: "4",
      total_time: "40:25",
      total_point: "800",
      total_score: "340",
      scores: [
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "7",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "15",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "1",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
        {
          star: "6",
          score1: "1",
          score2: "30",
          time: "05:25",
        },
      ],
    },
  },
];

const BattlePage = () => {
  const [isCheck, setIsCheck] = useState(false);

  const handleToggleCheck = () => {
    setIsCheck((prev) => !prev);
  };

  return (
    <div css={styles.wrap}>
      <div css={styles.container}>
        <div css={styles.titleContainer}>
          <div css={styles.titleInfo}>
            <h3>GEX-Cup 2024 (Open Contest)</h3>
            <h4>코딩 대결</h4>
          </div>
          <div css={styles.titleRightContainer}>
            <div css={styles.titleContentContainer}>
              <div css={[styles.titleContent, "time"]}>
                <div css={styles.titleBox}>
                  <img src='/assets/images/time.svg' alt='Time Icon' />
                  <h5>소요시간</h5>
                </div>
                <p css={styles.titleParagraph}>05:25</p>
              </div>
              <div css={[styles.titleContent, "heart"]}>
                <div css={styles.titleBox}>
                  <img src='/assets/images/heart.svg' alt='Heart Icon' />
                  <h5>내 점수</h5>
                </div>
                <p css={styles.titleParagraph}>05:25</p>
              </div>
              <div css={[styles.titleContent, "rank"]}>
                <div css={styles.titleBox}>
                  <img src='/assets/images/rank.svg' alt='Rank Icon' />
                  <h5>내 등수</h5>
                </div>
                <p css={styles.titleParagraph}>05:25</p>
              </div>
              <div css={[styles.titleContent, "point"]}>
                <div css={styles.titleBox}>
                  <h5>획득 포인트</h5>
                </div>
                <p css={styles.titleParagraph}>
                  700 <img src='/assets/images/point.svg' alt='Point Icon' />
                </p>
              </div>
            </div>
            <button className='close'>
              <img src='/assets/images/battle_close.svg' alt='Close Icon' />
            </button>
          </div>
        </div>

        {/* 나의 결과 */}
        <div css={styles.myResultContainer}>
          <div css={styles.myResultTitleContainer}>
            <div css={styles.myResultDot}></div>
            <span css={styles.myResultTitleText}>나의 결과</span>
            <div css={styles.myResultDot}></div>
          </div>
          <div css={styles.myResultScore}>
            <img css={styles.medalImage} src={medalImage} alt='Medal Image' />
            <div css={styles.characterContainer}>
              <div css={styles.characterHeader}>
                <div css={styles.profileWrapper}>
                  <div css={styles.rowDiv}>
                    <div css={styles.profileImageContainer}>
                      <img src={profileImage} alt='Profile Image' />
                    </div>
                    <span css={styles.profileTitle}>온리메타 자율학습단</span>
                  </div>
                  <div css={styles.represent}>
                    <span css={styles.representText}>대표</span>
                  </div>
                </div>
              </div>
              <div css={styles.characterContent}>
                <div css={styles.charImageContainer}>
                  <img src={charImage} alt='' />
                </div>
                <div css={styles.charInfo}>
                  <span css={styles.charInfoTextNo}>13</span>
                  <span css={styles.charInfoTextNickname}>킵고잉</span>
                  <span css={styles.charInfoTextLevel}>Lv.39</span>
                </div>
              </div>
            </div>
            <div css={styles.scoreContainer}>
              <div css={styles.scoreList}>
                <div css={styles.scoreItem}>
                  <div css={styles.scoreItemContent}>
                    <div css={styles.scoreItemContentHeader}>
                      <div css={styles.starContainer}>
                        <img src={starIcon} alt='Star Icon' />
                        <span css={styles.starRate}>1</span>
                      </div>
                      <img css={styles.searchIcon} src={searchIcon} alt='' />
                    </div>
                    <div css={styles.scoreTextContainer}>
                      <div css={styles.scoreText}>
                        <span css={styles.scoreTextMain}>1</span>
                        <span css={styles.scoreTextSub}>1</span>
                      </div>
                    </div>
                  </div>
                  <div css={styles.scoreItemFooter}>
                    <span css={styles.time}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div css={styles.contentContainer}>
          <div css={styles.titleInnerContainer}>
            <h5 css={styles.title}>유저목록({USERS.length})</h5>

            <div css={styles.optionContainer}>
              <CheckBox isCheck={isCheck} handleToggleCheck={handleToggleCheck}>
                <h5>
                  <img src='/assets/images/star.svg' alt='Star Icon' />
                  만보기
                </h5>
              </CheckBox>
              <select name='' id='' css={styles.userOption}>
                <option value=''>점수 높은순</option>
              </select>
            </div>
          </div>

          <RadarChart
            graphScore1={graphScore1}
            graphScore2={graphScore2}
            datasetName1={"데이터셋 1"}
            datasetName2={"데이터셋 2"}
            width={300}
            height={300}
            texts={texts}
          ></RadarChart>
          <div css={styles.userListContainer}>
            {USERS.map((data, idx) => (
              <UserBattlePointBox key={idx} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattlePage;
