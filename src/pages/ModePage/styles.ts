import { css } from "@emotion/react";

const styles = {
  profileCard: css`
    width: 184px;
    border: 1px solid #e5e8f0;
    border-radius: 5px;

    .profile_top {
      width: 100%;
      padding: 10px;
      background-color: #eef1f8;
      display: flex;
      align-items: center;
      gap: 8px;

      .profile_img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid #e9e9e9;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 90%;
        }
      }

      .profile_top_info {
        display: flex;
        align-items: flex-start;
        gap: 2px;

        h3 {
          display: inline-block;
          padding: 3px 5px;
          border-radius: 8px;
          background-color: #a872d1;
          font-size: 7px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0;
        }

        p {
          font-size: 12px;
          font-weight: 600;
          color: #000;
          margin-bottom: 0;
        }
      }
    }

    .profile_bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 10px 0 10px;

      .profile_char {
        height: 110px;

        img {
          height: 100%;
        }
      }

      .profile_bottom_info {
        padding: 3px 10px;
        display: flex;
        justify-content: center;
        gap: 5px;
        align-items: center;
        background-color: #e5e8f0;
        border-radius: 13px;

        p {
          margin-bottom: 0;
        }

        .num {
          font-size: 10px;
          font-weight: 700;
          color: #000;
        }
        .name {
          font-size: 13px;
          font-weight: 600;
          color: #000;
        }
        .level {
          font-size: 9px;
          font-weight: 600;
          color: #3970c1;
        }
      }
    }

    .profile_bottom.watching {
      background-image: radial-gradient(
        circle at 50% 50%,
        #fcf9ff,
        #e3beff 119%
      );
      position: relative;
    }

    .profile_bottom.solving {
      background-image: radial-gradient(
        circle at 50% 50%,
        #fcf9ff,
        #aedcff 119%
      );
      position: relative;
    }
  `,
  headerWatching: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 34px;
    background-image: linear-gradient(
      271deg,
      #6b04bb 0%,
      rgba(107, 4, 187, 0) 100%
    );
    opacity: 0.5;
    position: absolute;
    top: 0;
  `,
  headerSolving: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 34px;
    background-image: linear-gradient(
      271deg,
      #005dff 0%,
      rgba(0, 93, 255, 0) 100%
    );
    opacity: 0.5;
    position: absolute;
    top: 0;
  `,
};

export { styles };
