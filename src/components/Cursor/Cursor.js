import styles from './Cursor.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Cursor() {
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (element) => {
        setCursorX(element.clientX);
        setCursorY(element.clientY);
    });
    return <div style={{ left: cursorX + 'px', top: cursorY + 'px' }} className={cx('Cursor')}></div>;
}

export default Cursor;
