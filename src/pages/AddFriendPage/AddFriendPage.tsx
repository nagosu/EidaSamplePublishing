/** @jsxImportSource @emotion/react */

import { styles } from "./styles";
import sampleImage from "/assets/images/author_sample.png";
import cancelIcon from "/assets/images/cancel.png";
import searchIcon from "/assets/images/search.png";
import closeButton from "/assets/images/close_white.svg";
import { useEffect, useState } from "react";

// 프로필 더미데이터
const profiles = [
  { level: "Lv.10", nickname: "파이썬마스터", image: sampleImage },
  { level: "Lv.20", nickname: "코딩새싹", image: sampleImage },
  { level: "Lv.15", nickname: "코딩꿈나무", image: sampleImage },
  { level: "Lv.25", nickname: "김혜원", image: sampleImage },
  { level: "Lv.18", nickname: "여은진이", image: sampleImage },
  { level: "Lv.22", nickname: "오늘도힘차게", image: sampleImage },
  { level: "Lv.17", nickname: "냐냐냥", image: sampleImage },
  { level: "Lv.19", nickname: "귀여운게최고", image: sampleImage },
  { level: "Lv.21", nickname: "꼬잉꼬잉", image: sampleImage },
  { level: "Lv.23", nickname: "코딩왕", image: sampleImage },
  { level: "Lv.21", nickname: "파이썬초보", image: sampleImage },
  { level: "Lv.23", nickname: "코딩왕", image: sampleImage },
  { level: "Lv.21", nickname: "리액트고수", image: sampleImage },
  { level: "Lv.23", nickname: "코딩초보", image: sampleImage },
];

const AddFriendPage = () => {
  const [activeMode, setActiveMode] = useState<string>("친구");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<string>("");

  // 선택된 버튼
  const modes = ["친구", "로비", "채널"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  useEffect(() => {
    if (searchData) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [searchData]);

  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <span css={styles.title}>친구 추가</span>
        <button css={styles.closeButton}>
          <img src={closeButton} alt='' />
        </button>
      </div>
      <div css={styles.main}>
        <div css={styles.mainContent}>
          <div css={styles.buttonContainer}>
            {modes.map((mode) => (
              <button
                key={mode}
                css={[
                  mode === activeMode
                    ? styles.activeModeButton
                    : styles.modeButton,
                ]}
                onClick={() => setActiveMode(mode)}
              >
                <span css={styles.modeButtonText}>{mode}</span>
              </button>
            ))}
          </div>
          <div css={styles.nicknameSearchContainer}>
            <div css={styles.searchContainer}>
              <input
                css={styles.searchInput}
                type='text'
                placeholder='닉네임 검색'
                value={searchData}
                onChange={handleInputChange}
              />
              <img css={styles.searchIcon} src={searchIcon} alt='' />
              {isSearching && (
                <div css={styles.searchResultContainer}>
                  <div css={styles.searchResultList}>
                    <div css={styles.searchResultItemActive}>
                      <div css={styles.searchProfileItem}>
                        <div css={styles.profileImageWrapper}>
                          <img
                            css={styles.profileImage}
                            src={sampleImage}
                            alt=''
                          />
                          <div css={styles.profileStatus}></div>
                        </div>
                        <span css={styles.profileLevel}>Lv.43</span>
                        <span>
                          <span css={styles.highlighText}>코</span>
                          <span css={styles.profileNickName}>딩고수</span>
                        </span>
                      </div>
                    </div>
                    {profiles.map((profile, index) => (
                      <div key={index} css={styles.searchResultItem}>
                        <div css={styles.searchProfileItem}>
                          <div css={styles.profileImageWrapper}>
                            <img
                              css={styles.profileImage}
                              src={profile.image}
                              alt=''
                            />
                            <div css={styles.profileStatus}></div>
                          </div>
                          <span css={styles.profileLevel}>{profile.level}</span>
                          <span css={styles.profileNickName}>
                            {profile.nickname}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div css={styles.nicknameScroll}>
              {profiles.map((profile, index) => (
                <div key={index} css={styles.profileItem}>
                  <div css={styles.profileImageWrapper}>
                    <img css={styles.profileImage} src={profile.image} alt='' />
                    <div css={styles.profileStatus}></div>
                  </div>
                  <span css={styles.profileLevel}>{profile.level}</span>
                  <span css={styles.profileNickName}>{profile.nickname}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div css={styles.footer}>
        <div css={styles.selectedFriendContainer}>
          <span css={styles.selectedFriendTitle}>선택된 친구</span>
          <div css={styles.selectedFriendList}>
            {profiles.map((profile, index) => (
              <div key={index} css={styles.selectedFriendItem}>
                <div css={styles.selectedProfileContainer}>
                  <img
                    css={styles.selectedProfileImage}
                    src={profile.image}
                    alt=''
                  />
                  <span css={styles.selectedUserName}>{profile.nickname}</span>
                </div>
                <img css={styles.cancelIcon} src={cancelIcon} alt='' />
              </div>
            ))}
          </div>
        </div>
        <button css={styles.addButton}>
          <span css={styles.addButtonText}>추가하기</span>
        </button>
      </div>
    </div>
  );
};

export default AddFriendPage;
