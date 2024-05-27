import { css } from '@emotion/react';

const styles = {
    container: css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        background: transparent linear-gradient(180deg, #f5f5f5 0%, #e0e3eb 100%) 0% 0% no-repeat padding-box;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        padding: 5px 17px;
        border: 1px solid #b8becb;
        border-bottom-width: 3px !important;
    `,

    pinkBtn: css`
        background: transparent linear-gradient(180deg, #ff8ee8 0%, #d13fbd 100%) 0% 0% no-repeat padding-box;
        border: 1px solid #780067;
    `,
    purpleBtn: css`
        background: transparent linear-gradient(180deg, #c881ff 0%, #ad5ceb 100%) 0% 0% no-repeat padding-box;
        border: 1px solid #5a148f;
    `,
    blueBtn: css`
        background: transparent linear-gradient(180deg, #82acfc 0%, #537bc9 100%) 0% 0% no-repeat padding-box;
        border: 1px solid #0e2a60;
    `,
    defaultBtn: css`
        background: transparent linear-gradient(180deg, #f5f5f5 0%, #e0e3eb 100%) 0% 0% no-repeat padding-box;
        border: 1px solid #b8becb;
    `,
};

export { styles };
