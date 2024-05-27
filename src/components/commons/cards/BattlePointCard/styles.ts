import { css } from "@emotion/react";

const styles = {
    container: css`
        width: 89px;
        border: 1px solid #e5e8f0;
        border-radius: 5px;
        background-color: #eef1f8;
    `,
    cardTop: css`
        padding: 5px 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    cardTopParagraph: css`
        display: flex;
        align-items: center;
        gap: 3px;
        margin-bottom: 0;
        font-size: 10px;
        font-weight: 600;
        color: #000;
    `,
    cardMiddle: css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 8px;
        padding: 15px 0;
    `,
    cardMiddleParagraph: css`
        font-size: 20px;
        font-weight: 600;
        color: #000;
        margin-bottom: 0;
    `,
    cardMiddleSpan: css`
        font-size: 12px;
        font-weight: 600;
        color: #a6a8ad;
    `,
    cardBottom: css`
        padding: 8px 0;
        background-color: #cdd2de;
    `,
    cardBottomParagraph: css`
        font-size: 12px;
        font-weight: 500;
        color: #66696f;
        margin-bottom: 0;
        text-align: center;
    `,
};

export { styles };
