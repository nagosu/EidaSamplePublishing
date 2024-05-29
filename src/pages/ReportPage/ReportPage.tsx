/** @jsxImportSource @emotion/react */

import { styles } from "./styles";
import userSample from "/assets/images/user_sample.png";
import infoImage from "/assets/images/profile_img.svg";
import downArrow from "/assets/images/down_arrow.png";
import levelImage from "/assets/images/profile_sample2.png";

const evaluationItems = [
  {
    title: "타자연습",
    description: "참여횟수 / 정확도 / 시간 / 스스로 세웠던 목표 달성횟수",
  },
  {
    title: "컴퓨팅 사고력",
    description:
      "정해진 시간안에 주어진 문제 안에서 블록응용 / 로직(한문제당 1점)",
  },
  {
    title: "실기",
    description: "필수블록포함여부 / 수행도 / 정확성 / 부분점수 없음",
  },
  {
    title: "문제 풀이",
    description: "이론문제로 지필시험(한문제 당 1점)",
  },
  {
    title: "수업 태도",
    description: "지각 및 출석 / 수업참여도(미션수행, 발표) / 집중도",
  },
];

const evaluationScores = [
  {
    scoreRange: "90 ~ 100",
    description:
      "해당 지식과 기술을 확실하게 습득하여 직무수행에 필요한 기술적 사고력과 문제 해결책을 토대로 주도적으로 완벽한 작업을 수행할 수 있습니다.",
  },
  {
    scoreRange: "80 ~ 89",
    description:
      "해당 지식과 기술을 확실하게 습득하여 직무수행에 필요한 기술적 사고력과 문제 해결책을 토대로 주도적으로 완벽한 작업을 수행할 수 있습니다.",
  },
  {
    scoreRange: "70 ~ 79",
    description:
      "해당 지식과 기술을 확실하게 습득하여 직무수행에 필요한 기술적 사고력과 문제 해결책을 토대로 주도적으로 완벽한 작업을 수행할 수 있습니다.",
  },
  {
    scoreRange: " ~ 69",
    description:
      "해당 지식과 기술을 확실하게 습득하여 직무수행에 필요한 기술적 사고력과 문제 해결책을 토대로 주도적으로 완벽한 작업을 수행할 수 있습니다.",
  },
];

const descriptionItems = [
  "코드를 잘 이해하여 응용하는 상현이는 프로젝트 수업 시 꼭 사용해야 할 코드를 잘 파악하여 조직을 작성하기에 프로그램의 완성도가 높습니다.",
  "사고력이거나 개념정리도 잘 되어 이번 레벨테스트에서 높은 점수를 받았습니다.",
  "같은반 아이들과도 상호작용이 좋아 학습 시너지도 높습니다. 열심히 하는 상현이에게 많은 응원 부탁드립니다.",
];

const progressItems = [
  "샘플 1회차 1번 cospro3급",
  "샘플 1회차 2번 cospro3급",
  "샘플 1회차 3번 cospro3급",
  "샘플 1회차 4번 cospro3급",
  "샘플 1회차 5번 cospro3급",
  "샘플 1회차 6번 cospro3급",
  "샘플 1회차 7번 cospro3급",
];

const abilityValues = [100, 80, 60];
const skillValues = [40, 20];

const ReportPage = () => {
  return (
    <div css={styles.reportContainer}>
      <div css={styles.reportHeader}>
        <div css={styles.reportHeaderLeft}>
          <div css={styles.userImage}>
            <img src={userSample} alt='' />
          </div>
          <div css={styles.userInfoContainer}>
            <span css={styles.userName}>이은지</span>
            <span css={styles.userGrade}>2학년 8반</span>
          </div>
        </div>
        <div css={styles.reportHeaderRight}>
          <div css={styles.submitContainer}>
            <span css={styles.submitText}>제출번호 : 17271</span>
            <div css={styles.submitTextDivider}></div>
            <span css={styles.submitText}>2024.02.25 제출</span>
          </div>
          <div css={styles.buttonContainer}>
            <div css={styles.editButton}>
              {/* 연필 이미지 추가해야함 */}
              <span css={styles.editButtonText}>항목 수정</span>
            </div>
            <div css={styles.saveButton}>
              <span css={styles.saveButtonText}>PDF 저장</span>
            </div>
          </div>
        </div>
      </div>
      <div css={styles.reportInfo}>
        <div css={styles.infoTitleContainer}>
          <div css={styles.infoImageContainer}>
            <img src={infoImage} alt='' />
          </div>
          <div css={styles.infoMainContainer}>
            <span css={styles.infoMainTitle}>에 이 다 코 딩</span>
            <div css={styles.infoMainSubContainer}>
              <div css={styles.infoDot}></div>
              <span css={styles.infoMainSubTitle}>2월 레벨테스트 결과지</span>
              <div css={styles.infoDot}></div>
            </div>
          </div>
          <span css={styles.infoScore}>88점</span>
        </div>
        <div css={styles.infoDivider}></div>
        <div css={styles.infoTextContainer}>
          <span css={styles.infoText}>2024.02.25</span>
          <span css={styles.infoText}>스크래치 기초 2반</span>
          <span css={styles.infoText}>이름 : 이은지</span>
        </div>
      </div>
      <div css={styles.evaluationContainer}>
        <div css={styles.evaluationHeader}>
          <span css={styles.evaluationTitle}>평가 항목</span>
        </div>
        {evaluationItems.map((item, index) => (
          <div css={styles.evaluationItem} key={index}>
            <div css={styles.evaluationItemTitle}>
              <span css={styles.evaluationText}>{item.title}</span>
            </div>
            <div css={styles.evaluationDescription}>
              <span css={styles.evaluationText}>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
      <div css={styles.evaluationScoreContainer}>
        <div css={styles.evaluationHeader}>
          <span css={styles.evaluationTitle}>평가 항목</span>
        </div>
        {evaluationScores.map((item, index) => (
          <div css={styles.evaluationScoreItem} key={index}>
            <div css={styles.evaluationItemTitle}>
              <span css={styles.evaluationScoreText}>{item.scoreRange}</span>
            </div>
            <div css={styles.evaluationDescription}>
              <span css={styles.evaluationWrapText}>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
      <div css={styles.areaLevelContainer}>
        <div css={styles.areaLevelHeader}>
          <div css={styles.areaHeader}>
            <span css={styles.headerText}>AREA(영역)</span>
          </div>
          <div css={styles.LevelHeader}>
            <span css={styles.headerText}>LEVLE(수준)</span>
          </div>
        </div>
        <div css={styles.abilityContainer}>
          <div css={styles.titleContainer}>
            <span css={styles.areaLevelText}>ABILITY</span>
          </div>
          <div css={styles.subContainer}>
            <div css={styles.areaLevelItem}>
              <span css={styles.areaLevelText}>Lagical</span>
            </div>
            <div css={styles.areaLevelItem}>
              <span css={styles.areaLevelText}>Program solving</span>
            </div>
            <div css={styles.areaLevelItem}>
              <span css={styles.areaLevelText}>System</span>
            </div>
          </div>
          <div css={styles.scoreContainer}>
            <div css={styles.areaLevelItem}>
              <span css={styles.areaLevelText}>100</span>
            </div>
            <div css={styles.areaLevelItem}>
              <span css={styles.areaLevelText}>75</span>
            </div>
            <div css={styles.areaLevelItem}>
              <span css={styles.areaLevelText}>80</span>
            </div>
          </div>
          <div css={styles.levelContainer}>
            {abilityValues.map((progress, index) => (
              <div key={index} css={styles.levelItemContainer}>
                <div css={styles.sliderContainer}>
                  <div css={styles.sliderTrack(progress)}></div>
                  <div css={styles.sliderThumb(progress)}>
                    <span css={styles.sliderThumbNumber}>{progress}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div css={styles.skillContainer}>
          <div css={styles.titleContainer}>
            <span css={styles.areaLevelText}>SKILL</span>
          </div>
          <div css={styles.subContainer}>
            <div css={styles.areaLevelItem}>
              <span css={styles.areaLevelText}>Lagical</span>
            </div>
            <div css={styles.areaLevelItem}>
              <span css={styles.areaLevelText}>Program solving</span>
            </div>
          </div>
          <div css={styles.scoreContainer}>
            <div css={styles.areaLevelItem}>
              <span css={styles.areaLevelText}>75</span>
            </div>
            <div css={styles.areaLevelItem}>
              <span css={styles.areaLevelText}>88</span>
            </div>
          </div>
          <div css={styles.levelContainer}>
            {skillValues.map((progress, index) => (
              <div key={index} css={styles.levelItemContainer}>
                <div css={styles.sliderContainer}>
                  <div css={styles.sliderTrack(progress)}></div>
                  <div css={styles.sliderThumb(progress)}>
                    <span css={styles.sliderThumbNumber}>{progress}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div css={styles.graphContainer}>
        <div css={styles.testGraphContainer}>
          <div css={styles.testGraphHeader}>
            <span css={styles.testGraphTitle}>테스트 그래프</span>
            <div css={styles.monthContainer}>
              <div css={styles.monthItem}>
                <div css={styles.dotFirst}></div>
                <span css={styles.monthText}>2월</span>
              </div>
              <div css={styles.monthItem}>
                <div css={styles.dotSecond}></div>
                <span css={styles.monthText}>11월</span>
              </div>
            </div>
          </div>
          <div css={styles.chartContainer}>차트 들어가는 곳</div>
          <div css={styles.lastResultContainer}>
            <span css={styles.lastResultTitle}>이전 결과 비교</span>
            <div css={styles.dropdownContainer}>
              <span css={styles.dropdownText}>2월 테스트</span>
              <div css={styles.dropdownArrow}>
                <img src={downArrow} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div css={styles.descriptionContainer}>
          <span css={styles.descriptionTitle}>진단평가</span>
          <div css={styles.descriptionCol}>
            {descriptionItems.map((text, index) => (
              <div css={styles.descriptionItem} key={index}>
                <div css={styles.descriptionDot}></div>
                <span css={styles.descriptionText}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div css={styles.progressContainer}>
        <div css={styles.progressHeader}>
          <div css={styles.numberHeader}>
            <span css={styles.progressHeaderTitle}>번호</span>
          </div>
          <div css={styles.progressLevelHeader}>
            <span css={styles.progressHeaderTitle}>LEVLE(수준)</span>
          </div>
          <div css={styles.rateHeader}>
            <span css={styles.progressHeaderTitle}>진행률</span>
          </div>
        </div>
        <div css={styles.progressItemContainer}>
          <div css={styles.progressItem}>
            <div css={styles.progressNumber}>
              <span css={styles.progressText}>1</span>
            </div>
            <div css={styles.progressLevel}>
              <span css={styles.progressText}>3급 샘플 1회차</span>
            </div>
            <div css={styles.progressRate}>
              <span css={styles.progressText}>-</span>
            </div>
          </div>
          {progressItems.map((item, index) => (
            <div css={styles.progressItem} key={index}>
              <div css={styles.progressNumber}>
                <span css={styles.progressText}></span>
              </div>
              <div css={styles.progressLevel}>
                <div css={styles.levelImage}>
                  <img src={levelImage} alt='Level Image' />
                </div>
                <span css={styles.progressText}>{item}</span>
              </div>
              <div css={styles.progressRate}>
                <span css={styles.progressText}>-</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
