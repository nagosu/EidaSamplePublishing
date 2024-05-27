/** @jsxImportSource @emotion/react */

import { styles } from './styles';

const QuestionInfoCard = ({ style }: { style: any }) => {
    return (
        <div css={styles.container} style={style}>
            <img src="/assets/images/hover_img.svg" alt="" />
            <div>
                <p>
                    난이도 : <img src="/assets/images/star_yellow.svg" alt="" /> 1
                </p>
                <p>문제유형 : 4지선다</p>
                <p>문제번호 : 2</p>
            </div>
        </div>
    );
};

export default QuestionInfoCard;
