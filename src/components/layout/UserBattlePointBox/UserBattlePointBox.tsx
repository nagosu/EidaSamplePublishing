/** @jsxImportSource @emotion/react */

import BattlePointCard from "../../commons/cards/BattlePointCard";
import ProfileCard from "../../commons/cards/ProfileCard";
import { styles } from "./styles";

const UserBattlePointBox = ({ data }: { data: any }) => {
    const rankImg =
        Number(data.info.rank) === 1
            ? "rank1.svg"
            : Number(data.info.rank) === 2
            ? "rank2.svg"
            : Number(data.info.rank) === 3
            ? "rank3.svg"
            : "";

    return (
        <div css={styles.container}>
            <div css={styles.userRankBox}>
                <div css={styles.rankImgBox}>
                    <img src={`/assets/images/${rankImg}`} alt="Rank Icon" />
                </div>
                <ProfileCard data={data.user} rank />
            </div>
            <div css={styles.userPointBox}>
                <div css={styles.pointCardBox}>
                    {data.info.scores.map((data: any) => (
                        <BattlePointCard data={data} />
                    ))}
                    {data.info.scores.map((data: any) => (
                        <BattlePointCard data={data} />
                    ))}
                    <div css={styles.totalScoreCard}>
                        <p css={styles.scoreComment}>Score</p>
                        <p css={styles.score}>{data.info.total_score}</p>
                    </div>
                </div>
                <div css={styles.battleInfoBox}>
                    <div css={styles.timeBox}>
                        <img src="/assets/images/time.svg" alt="Time Icon" />
                        <p css={styles.timeComment}>총 소요시간</p>
                        <p css={styles.time}>{data.info.total_time}</p>
                    </div>
                    <div css={styles.pointBox}>
                        <p css={styles.pointComment}>획득 포인트</p>
                        <p css={styles.point}>
                            {data.info.total_point}
                            <img
                                src="/assets/images/point.svg"
                                alt="Point Icon"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBattlePointBox;
