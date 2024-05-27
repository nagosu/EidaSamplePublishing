/** @jsxImportSource @emotion/react */

import { useState } from "react";
import QuestionInfoCard from "../QuestionInfoCard";
import { styles } from "./styles";

const BattlePointCard = ({ data }: { data: any }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleMouseMove = (event: any) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const starImg =
        Number(data.star) < 5
            ? "star_yellow.svg"
            : Number(data.star) < 10
            ? "star_blue.svg"
            : "star_red.svg";

    return (
        <div
            css={styles.container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            {isHovering && (
                <QuestionInfoCard
                    style={{
                        top: mousePosition.y,
                        left: mousePosition.x && mousePosition.x + 20,
                    }}
                />
            )}

            <div css={styles.cardTop}>
                <p css={styles.cardTopParagraph}>
                    <img src={`/assets/images/${starImg}`} alt="" />
                    {data.star}
                </p>
                <button>
                    <img src="/assets/images/search.svg" alt="" />
                </button>
            </div>
            <div css={styles.cardMiddle}>
                <p css={styles.cardMiddleParagraph}>{data.score1}</p>
                <span css={styles.cardMiddleSpan}>{data.score2}</span>
            </div>
            <div css={styles.cardBottom}>
                <p css={styles.cardBottomParagraph}>05:25</p>
            </div>
        </div>
    );
};

export default BattlePointCard;
