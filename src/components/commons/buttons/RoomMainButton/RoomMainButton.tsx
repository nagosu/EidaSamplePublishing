/** @jsxImportSource @emotion/react */

import { styles } from './styles';

const Button = ({ title, color }: { title: string; color?: string }) => {
    const buttonColor =
        color === 'pink'
            ? styles.pinkBtn
            : color === 'blue'
            ? styles.blueBtn
            : color === 'purple'
            ? styles.purpleBtn
            : styles.defaultBtn;

    return <button css={[styles.container, buttonColor]}>{title}</button>;
};

export default Button;
