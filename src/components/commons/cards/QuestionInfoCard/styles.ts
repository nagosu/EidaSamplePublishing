import { css } from '@emotion/react';

const styles = {
    container: css`
        width: 200px;
        height: 90px;
        background-color: #424348;
        border-radius: 10px;
        display: flex;
        align-items: flex-start;
        padding: 10px;
        gap: 10px;
        position: absolute;
        z-index: 8000;

        p {
            font-size: 13px;
            font-weight: 400;
            color: #fff;
            display: flex;
            gap: 4px;
        }

        p:not(:last-child) {
            margin-bottom: 6px;
        }
    `,
};

export { styles };
