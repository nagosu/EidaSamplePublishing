import { css } from "@emotion/react";

const styles = {
  bannerContainer: css`
    width: 850px;
    height: 150px;
    border-radius: 15px;
    background-image: linear-gradient(to left, #3a96ff 100%, #4db8ff 0%);
  `,
  lectureContainer: css`
    width: 848px;
    height: auto;
    display: flex;
    flex-direction: column;
  `,
  lectureHeader: css`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  `,
  lectureTitle: css`
    font-family: "Pretendard";
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.08;
    letter-spacing: normal;
    color: #000;
  `,
  listAllContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
  listAllText: css`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #000;
  `,
  letcureListContainer: css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  `,
  lectureItem: css`
    width: 197px;
    height: 225px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  lectureThumbnailContainer: css`
    width: 100%;
    height: 114px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    overflow: hidden;
    margin-bottom: 15px;
  `,
  lectureItemTitle: css`
    width: 192px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 9px;
    white-space: normal;
  `,
  rateContainer: css`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;
  `,
  starContainer: css`
    display: flex;
    align-items: center;
  `,
  starItem: css`
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  rateText: css`
    opacity: 0.5;
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
  authorContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  `,
  authorImageContainer: css`
    width: 18px;
    height: 18px;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
  `,
  authorName: css`
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  `,
};

export { styles };
