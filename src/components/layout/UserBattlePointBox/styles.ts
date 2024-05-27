import { css } from "@emotion/react";

const styles = {
    container: css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    userRankBox: css`
        display: flex;
        align-items: center;
        gap: 25px;
    `,
    rankImgBox: css`
        width: 30px;

        img {
            width: 100%;
        }
    `,
    userPointBox: css`
        // width: 1036px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `,
    pointCardBox: css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    totalScoreCard: css`
        width: 89px;
        height: 100%;
        border-radius: 5px;
        background-color: #0088ff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
    `,
    scoreComment: css`
        font-size: 12px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
    `,
    score: css`
        font-size: 20px;
        font-weight: 600;
        color: #fff;
    `,
    battleInfoBox: css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        border-radius: 5px;
        background-color: #e9f3ff;
    `,
    timeBox: css`
        display: flex;
        align-items: center;
        gap: 7px;

        p {
            margin-bottom: 0;
        }
    `,
    timeComment: css`
        font-size: 14px;
        font-weight: 500;
        color: #000;
    `,
    time: css`
        font-size: 14px;
        font-weight: 600;
        color: #000;
        margin-left: 3px;
    `,
    pointBox: css`
        display: flex;
        align-items: center;
        gap: 62px;

        p {
            margin-bottom: 0;
        }
    `,
    pointComment: css`
        font-size: 14px;
        font-weight: 500;
        color: #000;
    `,
    point: css`
        font-size: 14px;
        font-weight: 600;
        color: #000;
        display: flex;
        align-items: center;
        gap: 5px;
    `,
};
export { styles };
