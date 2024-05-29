/** @jsxImportSource @emotion/react */

import { styles } from "./styles";
import rightArrowIcon from "../../../public/assets/images/right_arrow.png";
import { useState } from "react";

const ButtonPage = () => {
  const [activeMode, setActiveMode] = useState<string>("참여 가능 방");

  const modes = ["참여 가능 방", "대회 방"];

  return (
    <>
      <button css={styles.historyButton}>
        <span css={styles.historyButtonText}>내 전적보기</span>
        <img css={styles.rightArrow} src={rightArrowIcon} alt='' />
      </button>
      <div css={styles.modeButtonContainer}>
        {modes.map((mode) => (
          <button
            key={mode}
            css={
              mode === activeMode ? styles.modeButtonActive : styles.modeButton
            }
            onClick={() => setActiveMode(mode)}
          >
            <span
              css={
                mode === activeMode
                  ? styles.modeButtonTextActive
                  : styles.modeButtonText
              }
            >
              {mode}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonPage;
