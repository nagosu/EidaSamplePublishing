import { css } from "@emotion/react";

const styles = {
    wrap: css`
        width: 100%;
        padding: 30px 0;
        background-color: #f9fbff;
    `,
    container: css`
        width: 1350px;
        margin: 0 auto;
        padding: 10px;
        border: 1px solid #e5e8f0;
        background-color: #eef1f8;
        border-radius: 15px;

        @media (max-width: 1349px) {
            width: 100%;
        }
    `,
    titleContainer: css`
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1349px) {
            flex-direction: column;
            gap: 15px;
        }
    `,
    titleInfo: css`
        h3 {
            font-size: 20px;
            font-weight: 700;
            color: #000;
            margin-bottom: 6px;
        }
        h4 {
            font-size: 14px;
            font-weight: 500;
            color: #a8b2cc;
            margin-bottom: 0;
        }
    `,
    titleRightContainer: css`
        display: flex;
        align-items: center;
        gap: 50px;
    `,
    titleContentContainer: css`
        display: flex;
        align-items: center;
        gap: 10px;
    `,
    titleContent: css`
        padding: 10px;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        gap: 10px;

        &.heart {
            gap: 20px;
        }
        &.rank {
            gap: 30px;
        }
        &.point {
            gap: 60px;
        }
    `,
    titleBox: css`
        display: flex;
        align-items: center;
        gap: 5px;

        h5 {
            font-size: 14px;
            font-weight: 500;
            color: #000;
            margin-bottom: 0;
        }
    `,
    titleParagraph: css`
        font-size: 14px;
        font-weight: 600;
        color: #000;
        margin-bottom: 0;
        display: flex;
        gap: 2px;
    `,
    contentContainer: css`
        width: 100%;
        padding: 20px;
        background-color: #fff;
        border-radius: 15px;
        margin-top: 10px;
    `,
    titleInnerContainer: css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    `,
    title: css`
        font-size: 13px;
        font-weight: 500;
        color: #a8b2cc;
    `,
    optionContainer: css`
        display: flex;
        align-items: center;
        gap: 30px;
    `,
    userOption: css`
        font-size: 13px;
        font-weight: 500;
        color: #000;
        border: none;
        outline: none;
        cursor: pointer;
    `,
    userListContainer: css`
        width: 100%;
        height: 678px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 30px;

        &::-webkit-scrollbar {
            width: 3px;
            right: 10px;
        }

        &::-webkit-scrollbar-track {
            border-radius: 2px;
            right: 10px;
        }

        &::-webkit-scrollbar-thumb {
            width: 3px;
            height: 27px;
            border-radius: 2px;
            background: #a8b2cc;
        }
    `,
};

export { styles };
