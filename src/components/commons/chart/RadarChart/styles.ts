import { css } from "@emotion/react";

const styles = {
  modal: css`
    .modal-header {
      position: relative;
      padding: 0.75rem 0.75rem 1.5rem 0.75rem;
    }

    .modal-dialog {
      max-width: 777px;
    }

    .modal-title {
      position: absolute;
      top: 1.25rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .btn-close {
      z-index: 10;
    }
  `,
  container: css`
    display: flex;
    gap: 10px;
    align-items: center;

    .profile_box {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      position: relative;

      .status {
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        right: -2px;
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          width: 8px;
          height: 8px;
          background-color: #14e14b;
          border-radius: 50%;
        }
      }
    }
  `,

  // popup2: css`
  //   position: absolute;
  //   z-index: 8000;
  //   top: 0;
  //   // right: -130px;
  //   width: 120px;
  //   height: 80px;
  //   border-radius: 5px;
  //   filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.08));
  //   background: #ffffff;
  // `,

  button: css`
    display: block;
    width: 100%;
    height: 50%;
    font-size: 13px;
    font-weight: 500;
    color: #000000;
  `,
  popup2: css`
    position: absolute;
    width: 120px;
    height: 80px;
    z-index: 100 !important;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.08));
    border-radius: 5px;
    background-color: #fff;
    &:hover {
      color: #0088ff !important;
    }
  `,
  popup1: css`
    position: absolute;
    width: 120px;
    height: 40px;
    z-index: 100 !important;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.08));
    border-radius: 5px;
    background-color: #fff;
    &:hover {
      color: #0088ff !important;
    }
  `,
  popupButton: css`
    width: 140px;
    height: 40px;
    /* margin: 40px 0 0; */
    padding: 8px 23px 12px 15px;
    background-color: #fff;
    border: none;
    &:first-child {
      border-bottom: 1px solid #eee;
    }
  `,

  // popup: css`
  //   // p {
  //   // font-size: 14px;
  //   // font-weight: 500;
  //   color: #000000;
  //   // margin-bottom: 0;
  //   // cursor: pointer;
  //   // position: relative;

  //   // span {
  //   //   font-size: 14px;
  //   //   font-weight: 500;
  //   //   color: #66bc99;
  //   // }

  //   &:hover {
  //     color: #0088ff !important;
  //   }

  //   position: absolute;
  //   z-index: 8000;
  //   // top: 0;
  //   // right: -130px;
  //   // right: -10px;
  //   width: 120px;
  //   height: 80px;
  //   border-radius: 5px;
  //   filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.08));
  //   background: #ffffff;

  //   button {
  //     display: block;
  //     width: 100%;
  //     height: 50%;
  //     font-size: 13px;
  //     font-weight: 500;
  //     color: #000000;
  //     background: #ffffff;

  //     &:first-child {
  //       border-bottom: 1px solid #eee;
  //     }
  //   }

  //   // }
  // `,
};

export { styles };
