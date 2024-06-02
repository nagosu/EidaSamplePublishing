/** @jsxImportSource @emotion/react */

import { styles } from "./styles";
import backgroundSample from "/assets/images/background.png";
import count3 from "/assets/images/count_3.png";
import count2 from "/assets/images/count_2.png";
import count1 from "/assets/images/count_1.png";
import start from "/assets/images/count_start.png";
import dolphin from "/assets/images/dolphin200.png";
import { useEffect, useState } from "react";

const CountPage = () => {
  const [countIndex, setCountIndex] = useState(0); // 카운트 이미지 인덱스
  const images = [count3, count2, count1, start]; // 카운트 이미지

  // 카운트 이미지 변경
  useEffect(() => {
    const timer = setInterval(() => {
      setCountIndex((prevIndex) => {
        if (prevIndex < images.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(timer);
          return prevIndex;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <img src={backgroundSample} alt='' />
      <div css={styles.container}>
        <img src={images[countIndex]} alt='' />
        <div css={styles.dolphinContainer}>
          <img src={dolphin} alt='' />
        </div>
      </div>
    </>
  );
};

export default CountPage;
