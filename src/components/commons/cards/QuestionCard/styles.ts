import { css } from '@emotion/react';

const styles = {
    questionCard: css`
        width: 100%;
        padding: 8px 15px;
        background-color: #eef1f8;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .info_box {
            display: flex;
            align-items: center;
            gap: 12px;

            .question_num {
                font-size: 10px;
                font-weight: 700;
                color: #000;
                margin-bottom: 0;
            }
            .line {
                width: 1px;
                height: 8px;
                background-color: #d6dbdf;
            }
            .img_box {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }

            .card_info {
                .title {
                    font-size: 13px;
                    font-weight: 500;
                    color: #000;
                    margin-bottom: 2px;
                }
                .sub_title {
                    font-size: 10px;
                    font-weight: 500;
                    color: #707070;
                    margin-bottom: 0;
                }
            }
        }
    `,
};

export { styles };
