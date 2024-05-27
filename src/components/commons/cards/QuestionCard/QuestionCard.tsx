/** @jsxImportSource @emotion/react */

import { styles } from './styles';

interface QuestionCardProps {
    data: {
        profileImg: string;
        title: string;
        subTitle: string;
    };
    index: number;
}

const QuestionCard = ({ data, index }: QuestionCardProps) => {
    return (
        <div css={styles.questionCard}>
            <div className="info_box">
                <h4 className="question_num">문제 {index + 1}</h4>
                <div className="line"></div>
                <div className="img_box">
                    <img src="/assets/images/question_profile.svg" alt="" />
                </div>
                <div className="card_info">
                    <h5 className="title">{data.title}</h5>
                    <h6 className="sub_title">{data.subTitle}</h6>
                </div>
            </div>
            <button>
                <img src="/assets/images/closeBtn.svg" alt="" />
            </button>
        </div>
    );
};

export default QuestionCard;
