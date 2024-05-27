import { css } from "@emotion/react";

const styles = {
    wrap: css`
        width: 100%;
        padding: 30px 0;
        background-color: #f9fbff;
    `,
    container: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1350px;
        margin: 0 auto;

        @media (max-width: 1349px) {
            width: 95%;
            margin: 0 auto;
            gap: 15px;
        }

        @media (max-width: 1250px) {
            width: 100%;
            flex-direction: column;
            gap: 20px;
        }
    `,
    leftContainer: css`
        width: 1020px;

        @media (max-width: 1349px) {
            width: 75%;
        }

        @media (max-width: 1250px) {
            width: 90%;
            flex-direction: column;
            gap: 20px;
        }
    `,
    listBox: css`
        width: 100%;
        padding: 10px;
        border: 1px solid #e5e8f0;
        background-color: #eef1f8;
        border-radius: 15px;
    `,
    listContainer: css`
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 8px;
        width: 100%;
        height: 491px;
        padding: 20px;
        background-color: #fff;
        overflow-y: auto;
        border-radius: 5px;

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
    btnContainer: css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
    `,
    w460: css`
        width: 460px;
    `,
    w170: css`
        width: 170px;
    `,
    bottomContainer: css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    `,
    chatBox: css`
        width: 100%;
        height: 240px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    `,
    chatContainer: css`
        width: 100%;
        height: 200px;
        padding: 12px;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 3px;
            right: 10px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
            right: 10px;
        }

        &::-webkit-scrollbar-thumb {
            width: 3px;
            height: 27px;
            border-radius: 2px;
            background: #fff;
        }
    `,
    chatP: css`
        font-size: 13px;
        font-weight: 500;
        color: #ffffff;
        opacity: 0.5;
        margin-bottom: 8px;

        &.notice {
            opacity: 1;
            color: #00e5ff;
        }

        &.my_chat {
            opacity: 1;
        }
    `,
    inputBox: css`
        width: 100%;
        padding: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background: #4a4a4a;
        width: 175px;
    `,
    inputContainer: css`
        flex: 0.99;
        height: 28px;
        border-radius: 6px;
        // background-color: #3b3b3b;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 33px;

        input {
            width: 100%;
            height: 100%;
            background: none;
            font-size: 13px;
            font-weight: 500;
            color: #ffffff;
            padding: 8px;
            border: none;
        }

        &.time {
            margin-bottom: 20px;
        }

        .title {
            font-size: 14px;
            font-weight: 600;
            color: #000;
            margin-bottom: 0;
        }
    `,
    button: css`
        width: 65px;
        height: 28px;
        border: 1px solid #b8becb;
        border-radius: 6px;
        background: linear-gradient(180deg, #f6f6f6 0%, #dfe2ea 100%);
        border-bottom: 3px solid #b8becb;

        span {
            font-size: 12px;
            font-weight: 500;
            color: #000000;
        }
    `,

    rightContainer: css`
        width: 300px;
        padding: 10px;
        border: 1px solid #e5e8f0;
        background-color: #eef1f8;
        border-radius: 15px;

        @media (max-width: 1349px) {
            width: 20%;
            min-width: 300px;
        }

        @media (max-width: 1250px) {
            width: 40%;
        }
    `,
    roomInfoBox: css`
        width: 100%;
        margin-bottom: 20px;
    `,
    titleBox: css`
        width: 100%;
        padding: 8px 5px;
        display: flex;
        align-items: center;
        gap: 10px;

        p {
            margin-bottom: 0;
        }
    `,
    num: css`
        padding: 1px 10px;
        border: 1px solid #1e66b9;
        background-color: #2272ce;
        font-size: 13px;
        font-weight: 600;
        color: #fff;
        border-radius: 4px;
    `,
    title: css`
        font-size: 20px;
        font-weight: 700;
        color: #000;
    `,
    vsImg: css`
        width: 100%;
        border-radius: 5px;
        overflow: hidden;

        img {
            width: 100%;
        }
    `,
    rightContentBox: css`
        width: 100%;
        background-color: #fff;
        border-radius: 5px;

        &:first-of-type {
            margin-bottom: 10px;
        }
    `,
    contentTitleBox: css`
        width: 100%;
        padding: 14px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e5e8f0;

        h4 {
            font-size: 14px;
            font-weight: 500;
            color: #000;
            margin-bottom: 0;
        }

        button {
            font-size: 12px;
            font-weight: 500;
            color: #0088ff;
        }
    `,
    contentBox: css`
        width: 100%;
        padding: 10px;
    `,
    contentContainerQuestion: css`
        width: 100%;
        height: 260px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 5px;

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
    timeInput: css`
        width: 100%;
        padding: 15px;
        background-color: #f4f6fa;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 500;
        color: #000;
        border: none;

        &::placeholder {
            color: #707070;
        }

        &::placeholder {
            color: #707070;
        }
    `,
    checkContainer: css`
        display: flex;
        align-items: center;
        gap: 30px;
    `,

    detailOption: css`
        width: 100%;
        padding: 7px 0;
        border: 1px solid #e5e8f0;
        border-radius: 10px;
        background: none;
        font-size: 14px;
        font-weight: 500;
        color: #000;
    `,
};

export { styles };
