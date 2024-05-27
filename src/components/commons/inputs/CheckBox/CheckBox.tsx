/** @jsxImportSource @emotion/react */

import { ReactNode } from "react";
import { styles } from "./styles";

const CheckBox = ({
    children,
    isCheck,
    handleToggleCheck,
}: {
    children: ReactNode;
    isCheck: boolean;
    handleToggleCheck: () => void;
}) => {
    return (
        <div css={styles.checkBox} onClick={handleToggleCheck}>
            <div
                css={styles.checkBoxOnOff}
                style={{ background: isCheck ? "#0088FF" : "#F4F6FA" }}
            >
                <img
                    src={`${
                        isCheck
                            ? "/assets/images/check_on.svg"
                            : "/assets/images/check_off.svg"
                    }`}
                    alt=""
                />
            </div>
            <h5>{children}</h5>
        </div>
    );
};

export default CheckBox;
