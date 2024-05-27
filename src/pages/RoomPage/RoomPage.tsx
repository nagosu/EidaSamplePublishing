/** @jsxImportSource @emotion/react */

import { useState } from "react";
import RoomMainButton from "../../components/commons/buttons/RoomMainButton";
import ProfileCard from "../../components/commons/cards/ProfileCard";
import QuestionCard from "../../components/commons/cards/QuestionCard";
import CheckBox from "../../components/commons/inputs/CheckBox";
import { styles } from "./styles";
import { css } from "@emotion/react";

const USERS = [
    {
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
    },
    {
        group: {
            profileImg: "profile_img.svg",
            name: "온리메타 자율학습단2",
        },
        user: {
            name: "킵고잉",
            charImg: "char.svg",
            num: "13",
            level: "39",
        },
    },
    {
        group: {
            profileImg: "profile_img.svg",
            name: "온리메타 자율학습단3",
        },
        user: {
            name: "킵고잉",
            charImg: "char.svg",
            num: "13",
            level: "392",
        },
    },
    {
        group: {
            profileImg: "profile_img.svg",
            name: "온리메타 자율학습단4",
        },
        user: {
            name: "킵고잉",
            charImg: "char.svg",
            num: "13",
            level: "19",
        },
    },
    {
        group: {
            profileImg: "profile_img.svg",
            name: "온리메타 자율학습단5",
        },
        user: {
            name: "킵고잉",
            charImg: "char.svg",
            num: "13",
            level: "39",
        },
    },
    {
        group: {
            profileImg: "profile_img.svg",
            name: "온리메타 자율학습단",
        },
        user: {
            name: "킵고잉24",
            charImg: "char.svg",
            num: "132",
            level: "79",
        },
    },
    {
        group: {
            profileImg: "profile_img.svg",
            name: "온리메타 자율학습단",
        },
        user: {
            name: "킵고잉",
            charImg: "char.svg",
            num: "13",
            level: "39",
        },
    },
    {
        group: {
            profileImg: "profile_img.svg",
            name: "온리메타 자율학습단",
        },
        user: {
            name: "킵고잉",
            charImg: "char.svg",
            num: "13",
            level: "39",
        },
    },
    {
        group: {
            profileImg: "profile_img.svg",
            name: "온리메타 자율학습단",
        },
        user: {
            name: "킵고잉",
            charImg: "char.svg",
            num: "13",
            level: "39",
        },
    },
    {
        group: {
            profileImg: "profile_img.svg",
            name: "온리메타 자율학습단",
        },
        user: {
            name: "킵고잉",
            charImg: "char.svg",
            num: "13",
            level: "39",
        },
    },
    {
        group: {
            profileImg: "profile_img.svg",
            name: "온리메타 자율학습단",
        },
        user: {
            name: "킵고잉",
            charImg: "char.svg",
            num: "13",
            level: "39",
        },
    },
];

const QUESTIONS = [
    {
        profileImg: "question.profile.svg",
        title: "서블릿",
        subTitle: "텍스트코딩",
    },
    {
        profileImg: "question.profile.svg",
        title: "서블릿2",
        subTitle: "텍스트코딩",
    },
    {
        profileImg: "question.profile.svg",
        title: "서블릿3",
        subTitle: "텍스트코딩",
    },
    {
        profileImg: "question.profile.svg",
        title: "서블릿4",
        subTitle: "텍스트코딩",
    },
    {
        profileImg: "question.profile.svg",
        title: "서블릿5",
        subTitle: "텍스트코딩",
    },
    {
        profileImg: "question.profile.svg",
        title: "서블릿6",
        subTitle: "텍스트코딩",
    },
    {
        profileImg: "question.profile.svg",
        title: "서블릿7",
        subTitle: "텍스트코딩",
    },
    {
        profileImg: "question.profile.svg",
        title: "서블릿8",
        subTitle: "텍스트코딩",
    },
    {
        profileImg: "question.profile.svg",
        title: "서블릿9",
        subTitle: "텍스트코딩",
    },
];

const ListPage = () => {
    const [isItemCheck, setIsItemCheck] = useState(true);
    const [isNpcCheck, setIsNpcCheck] = useState(true);

    const handleToggleItemCheckOn = () => {
        setIsItemCheck(true);
    };
    const handleToggleItemCheckOff = () => {
        setIsItemCheck(false);
    };

    const handleToggleNpcCheckOn = () => {
        setIsNpcCheck(true);
    };

    const handleToggleNpcCheckOff = () => {
        setIsNpcCheck(false);
    };

    return (
        <div css={styles.wrap}>
            <div css={styles.container}>
                <div css={styles.leftContainer}>
                    <div css={styles.listBox}>
                        <div css={styles.listContainer}>
                            {USERS.map((data, index) => (
                                <ProfileCard key={index} data={data} />
                            ))}
                        </div>
                        <div css={styles.btnContainer}>
                            <div css={styles.w460}>
                                <RoomMainButton title="시작하기" color="pink" />
                            </div>
                            <div css={styles.w170}>
                                <RoomMainButton
                                    title="관전모드"
                                    color="purple"
                                />
                            </div>
                            <div css={styles.w170}>
                                <RoomMainButton title="초대하기" color="blue" />
                            </div>
                            <div css={styles.w170}>
                                <RoomMainButton title="나가기" />
                            </div>
                        </div>
                    </div>
                    <div css={styles.bottomContainer}>
                        <div css={styles.chatBox}>
                            <div css={styles.chatContainer}>
                                <p
                                    css={[
                                        styles.chatP,
                                        css({ opacity: 1, color: "#00e5ff" }),
                                    ]}
                                >
                                    [환영] 환영합니다.
                                </p>
                                <p css={styles.chatP}>백설하 : 안녕하세요.</p>
                                <p css={styles.chatP}>
                                    코딩만랩 : 길드 들어가고 싶어요!
                                </p>
                                <p css={[styles.chatP, css({ opacity: 1 })]}>
                                    킵고잉(나) : 온리메타 자율학습단 길드를
                                    개설했어요! 많이 들어오세요
                                </p>
                                <p css={styles.chatP}>
                                    핑구돌핀 : 저 들어갈래요!
                                </p>
                                <p css={styles.chatP}>
                                    로제타 : ChatGPT 같이 배우실분?
                                </p>
                                <p css={styles.chatP}>
                                    핑구돌핀 : 저 들어갈래요!
                                </p>
                                <p css={styles.chatP}>
                                    로제타 : ChatGPT 같이 배우실분?
                                </p>
                                <p css={styles.chatP}>
                                    핑구돌핀 : 저 들어갈래요!
                                </p>
                                <p css={styles.chatP}>
                                    로제타 : ChatGPT 같이 배우실분?
                                </p>
                                <p css={styles.chatP}>
                                    핑구돌핀 : 저 들어갈래요!
                                </p>
                                <p css={styles.chatP}>
                                    로제타 : ChatGPT 같이 배우실분?
                                </p>
                            </div>
                            <div css={styles.inputBox}>
                                <button css={styles.button}>
                                    <span>모두에게</span>
                                </button>
                                <div css={styles.inputContainer}>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={styles.rightContainer}>
                    <div css={styles.roomInfoBox}>
                        <div css={styles.titleBox}>
                            <p css={styles.num}>12</p>
                            <p css={styles.title}>초보만 제발</p>
                        </div>
                        <div css={styles.vsImg}>
                            <img src="/assets/images/vs.svg" alt="VS" />
                        </div>
                    </div>
                    <div>
                        <div css={styles.rightContentBox}>
                            <div css={styles.contentTitleBox}>
                                <h4>문제</h4>
                                <button>+ 문제추가</button>
                            </div>
                            <div css={styles.contentBox}>
                                <div css={styles.contentContainerQuestion}>
                                    {QUESTIONS.map((data, index) => (
                                        <QuestionCard
                                            key={index}
                                            data={data}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div css={styles.rightContentBox}>
                            <div css={styles.contentTitleBox}>
                                <h4>옵션</h4>
                            </div>
                            <div css={styles.contentBox}>
                                <div>
                                    <div
                                        className="inputContainer time"
                                        css={styles.inputContainer}
                                    >
                                        <h4
                                            className="title"
                                            css={styles.title}
                                        >
                                            제한시간
                                        </h4>
                                        <div
                                            className="inputBox"
                                            css={styles.inputBox}
                                        >
                                            <input
                                                type="text"
                                                className="timeInput"
                                                css={styles.timeInput}
                                                placeholder="시간 입력"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="inputContainer"
                                        css={styles.inputContainer}
                                    >
                                        <h4
                                            className="title"
                                            css={styles.title}
                                        >
                                            아이템
                                        </h4>
                                        <div
                                            className="inputBox"
                                            css={styles.inputBox}
                                        >
                                            <div
                                                className="checkContainer"
                                                css={styles.checkContainer}
                                            >
                                                <CheckBox
                                                    isCheck={
                                                        isItemCheck === true
                                                    }
                                                    handleToggleCheck={
                                                        handleToggleItemCheckOn
                                                    }
                                                >
                                                    <h5>ON</h5>
                                                </CheckBox>
                                                <CheckBox
                                                    isCheck={
                                                        isItemCheck === false
                                                    }
                                                    handleToggleCheck={
                                                        handleToggleItemCheckOff
                                                    }
                                                >
                                                    <h5>OFF</h5>
                                                </CheckBox>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="inputContainer"
                                        css={styles.inputContainer}
                                    >
                                        <h4
                                            className="title"
                                            css={styles.title}
                                        >
                                            NPC
                                        </h4>
                                        <div
                                            className="inputBox"
                                            css={styles.inputBox}
                                        >
                                            <div
                                                className="checkContainer"
                                                css={styles.checkContainer}
                                            >
                                                <CheckBox
                                                    isCheck={
                                                        isNpcCheck === true
                                                    }
                                                    handleToggleCheck={
                                                        handleToggleNpcCheckOn
                                                    }
                                                >
                                                    <h5>ON</h5>
                                                </CheckBox>
                                                <CheckBox
                                                    isCheck={
                                                        isNpcCheck === false
                                                    }
                                                    handleToggleCheck={
                                                        handleToggleNpcCheckOff
                                                    }
                                                >
                                                    OFF
                                                </CheckBox>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="detailOption"
                                        css={styles.detailOption}
                                    >
                                        상세 옵션
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListPage;
