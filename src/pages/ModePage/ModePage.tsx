/** @jsxImportSource @emotion/react */

import { styles } from "./styles";

const USER = {
  group: {
    profileImg: "profile_img.svg",
    name: "온리메타 자율학습단",
  },
  user: {
    name: "킵고잉",
    charImg: "char.svg",
    num: "134",
    level: "39",
  },
};

const rank = false;

const ModePage = () => {
  return (
    <>
      {/* 관전모드 */}
      <div css={styles.profileCard}>
        <div className='profile_top'>
          <div className='profile_img'>
            <img src={`/assets/images/${USER.group.profileImg}`} alt='' />
          </div>
          <div
            className='profile_top_info'
            style={{ flexDirection: rank ? "row-reverse" : "column" }}
          >
            <h3>대표</h3>
            <p>{USER.group.name}</p>
          </div>
        </div>
        <div className='profile_bottom watching'>
          <div className='profile_char'>
            <img src={`/assets/images/${USER.user.charImg}`} alt='' />
          </div>
          <div className='profile_bottom_info'>
            <p className='num'>{USER.user.num}</p>
            <p className='name'>{USER.user.name}</p>
            <p className='level'>Lv.{USER.user.level}</p>
          </div>
          <div css={styles.headerWatching}></div>
        </div>
      </div>

      {/* 문제풀이중 */}
      <div css={styles.profileCard}>
        <div className='profile_top'>
          <div className='profile_img'>
            <img src={`/assets/images/${USER.group.profileImg}`} alt='' />
          </div>
          <div
            className='profile_top_info'
            style={{ flexDirection: rank ? "row-reverse" : "column" }}
          >
            <h3>대표</h3>
            <p>{USER.group.name}</p>
          </div>
        </div>
        <div className='profile_bottom solving'>
          <div className='profile_char'>
            <img src={`/assets/images/${USER.user.charImg}`} alt='' />
          </div>
          <div className='profile_bottom_info'>
            <p className='num'>{USER.user.num}</p>
            <p className='name'>{USER.user.name}</p>
            <p className='level'>Lv.{USER.user.level}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModePage;
