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
import timeIcon from "/assets/images/time.svg";
import pointIcon from "/assets/images/point.svg";
import profileSample1 from "/assets/images/profile_sample1.png";
import profileSample2 from "/assets/images/profile_sample2.png";
import profileSample3 from "/assets/images/profile_sample3.png";

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

const recommendedItems = [
  {
    image: profileSample1,
    title: "서블릿",
    subTitle: "텍스트코딩",
  },
  {
    image: profileSample2,
    title: "성적 평균 구하기",
    subTitle: "블록코딩",
  },
  {
    image: profileSample3,
    title: "서블릿",
    subTitle: "4지선다",
  },
];

const BattlePage = () => {
  const [isCheck, setIsCheck] = useState(false);

  const handleToggleCheck = () => {
    setIsCheck((prev) => !prev);
  };

  const userWithRank1 = USERS.find((user) => user.info.rank === "1");

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
                {userWithRank1?.info.scores.map((score, idx) => (
                  <div key={idx} css={styles.scoreItem}>
                    <div css={styles.scoreItemContent}>
                      <div css={styles.scoreItemContentHeader}>
                        <div css={styles.starContainer}>
                          <img src={starIcon} alt='Star Icon' />
                          <span css={styles.starRate}>{score.star}</span>
                        </div>
                        <img css={styles.searchIcon} src={searchIcon} alt='' />
                      </div>
                      <div css={styles.scoreTextContainer}>
                        <div css={styles.scoreText}>
                          <span css={styles.scoreTextMain}>{score.score1}</span>
                          <span css={styles.scoreTextSub}>{score.score2}</span>
                        </div>
                      </div>
                    </div>
                    <div css={styles.scoreItemFooter}>
                      <span css={styles.time}>{score.time}</span>
                    </div>
                  </div>
                ))}
                <div css={styles.totalScoreContainer}>
                  <div css={styles.totalScoreTextContainer}>
                    <span css={styles.totalScoreText}>Score</span>
                    <span css={styles.totalScoreNumber}>340</span>
                  </div>
                </div>
              </div>
              <div css={styles.timePointResult}>
                <div css={styles.timeContainer}>
                  <div css={styles.timeIconContainer}>
                    <img src={timeIcon} alt='' />
                  </div>
                  <span css={styles.timeText}>총 소요시간</span>
                  <span css={styles.timeNumber}>40:25</span>
                </div>
                <div css={styles.pointContainer}>
                  <span css={styles.pointText}>획득 포인트</span>
                  <span css={styles.pointNumber}>700</span>
                  <div css={styles.pointIconContainer}>
                    <img src={pointIcon} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div css={styles.graphContainer}>
            <div css={styles.testGraphContainer}>
              <div css={styles.testGraphHeader}>
                <span css={styles.testGraphTitle}>2월 테스트 그래프</span>
                <div css={styles.monthContainer}>
                  <div css={styles.monthItem}>
                    <div css={styles.monthColorFirst}></div>
                    <span css={styles.monthText}>2월</span>
                  </div>
                  <div css={styles.monthItem}>
                    <div css={styles.monthColorSecond}></div>
                    <span css={styles.monthText}>11월</span>
                  </div>
                </div>
              </div>
            </div>
            <div css={styles.areaLevelContainer}>
              <div css={styles.areaLevelHeader}>
                <div css={styles.areaHeader}>
                  <span css={styles.headerText}>AREA(영역)</span>
                </div>
                <div css={styles.levelHeader}>
                  <span css={styles.headerText}>LEVLE(수준)</span>
                </div>
              </div>
              <div css={styles.areaLevelContent}>
                <div css={styles.areaContainer}>
                  <div css={styles.areaAbilityContainer}>
                    <span css={styles.areaText}>ABILITY</span>
                  </div>
                  <div css={styles.areaSkillContainer}>
                    <span css={styles.areaText}>SKILL</span>
                  </div>
                </div>
                <div css={styles.areaSubContainer}>
                  <div css={styles.areaSubItemContainer}>
                    <span css={styles.areaSubItemText}>Lagical</span>
                  </div>
                  <div css={styles.areaSubItemContainer}>
                    <span css={styles.areaSubItemText}>Program solving</span>
                  </div>
                  <div css={styles.areaSubItemContainer}>
                    <span css={styles.areaSubItemText}>System</span>
                  </div>
                  <div css={styles.areaSubItemContainer}>
                    <span css={styles.areaSubItemText}>Lagical</span>
                  </div>
                  <div css={styles.areaSubItemContainer}>
                    <span css={styles.areaSubItemText}>Program solving</span>
                  </div>
                </div>
                <div css={styles.areaScoreContainer}>
                  <div css={styles.areaScoreItemContainer}>
                    <span css={styles.areaScoreItemText}>100</span>
                  </div>
                  <div css={styles.areaScoreItemContainer}>
                    <span css={styles.areaScoreItemText}>75</span>
                  </div>
                  <div css={styles.areaScoreItemContainer}>
                    <span css={styles.areaScoreItemText}>80</span>
                  </div>
                  <div css={styles.areaScoreItemContainer}>
                    <span css={styles.areaScoreItemText}>75</span>
                  </div>
                  <div css={styles.areaScoreItemContainer}>
                    <span css={styles.areaScoreItemText}>88</span>
                  </div>
                </div>
                <div css={styles.levelContainer}>
                  <div css={styles.levelItemContainer}>
                    <div css={styles.sliderContainer}>
                      <div css={styles.sliderTrack}></div>
                      <div css={styles.sliderThumb}>
                        <span css={styles.sliderThumbNumber}>100</span>
                      </div>
                    </div>
                  </div>
                  <div css={styles.levelItemContainer}></div>
                  <div css={styles.levelItemContainer}></div>
                  <div css={styles.levelItemContainer}></div>
                  <div css={styles.levelItemContainer}></div>
                </div>
              </div>
            </div>
            <div css={styles.problemTypeContainer}>
              <div css={styles.problemTypeHeader}>
                <span css={styles.problemTypeTitle}>부족한 문제유형</span>
              </div>
              <div css={styles.problemTypeContent}>
                <div css={styles.typeWrapper}>
                  <div css={styles.typeContainer}>
                    <span css={styles.typeText}>스택</span>
                  </div>
                  <div css={styles.typeContainer}>
                    <span css={styles.typeText}>그래프</span>
                  </div>
                </div>
              </div>
            </div>
            <div css={styles.recommendContainer}>
              <div css={styles.recommendHeader}>
                <span css={styles.recommendTitle}>추천문제</span>
              </div>
              <div css={styles.recommendContent}>
                <div css={styles.recommendScroll}>
                  {recommendedItems.map((item, index) => (
                    <div css={styles.recommendItem} key={index}>
                      <div css={styles.itemImage}>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div css={styles.itemTitleContainer}>
                        <span css={styles.itemTitle}>{item.title}</span>
                        <span css={styles.itemSubTitle}>{item.subTitle}</span>
                      </div>
                    </div>
                  ))}
                  {recommendedItems.map((item, index) => (
                    <div css={styles.recommendItem} key={index}>
                      <div css={styles.itemImage}>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div css={styles.itemTitleContainer}>
                        <span css={styles.itemTitle}>{item.title}</span>
                        <span css={styles.itemSubTitle}>{item.subTitle}</span>
                      </div>
                    </div>
                  ))}
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
