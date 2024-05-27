/** @jsxImportSource @emotion/react */

import { styles } from './styles';

interface ProfileCardProps {
    rank?: boolean;
    data: {
        group: {
            profileImg: string;
            name: string;
        };
        user: {
            name: string;
            charImg: string;
            num: string;
            level: string;
        };
    };
}

const ProfileCard = ({ rank, data }: ProfileCardProps) => {
    return (
        <div css={styles.profileCard}>
            <div className="profile_top">
                <div className="profile_img">
                    <img src={`/assets/images/${data.group.profileImg}`} alt="" />
                </div>
                <div className="profile_top_info" style={{ flexDirection: rank ? 'row-reverse' : 'column' }}>
                    <h3>대표</h3>
                    <p>{data.group.name}</p>
                </div>
            </div>
            <div className="profile_bottom">
                <div className="profile_char">
                    <img src={`/assets/images/${data.user.charImg}`} alt="" />
                </div>
                <div className="profile_bottom_info">
                    <p className="num">{data.user.num}</p>
                    <p className="name">{data.user.name}</p>
                    <p className="level">Lv.{data.user.level}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
