import { css } from "@emotion/react";

const styles = {
    checkBox: css`
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;

        h5 {
            font-size: 14px;
            font-weight: 500;
            color: #000;
            margin-bottom: 0;
            display: flex;
            align-items: flex-start;
            gap: 1px;

            img {
                margin-top: -1px;
            }
        }
    `,

    checkBoxOnOff: css`
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    `,
};

export { styles };
