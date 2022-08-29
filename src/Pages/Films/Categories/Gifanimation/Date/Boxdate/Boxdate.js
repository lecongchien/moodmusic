import styles from './Boxdate.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Boxdate({ date, Monthandday }) {
    const [changeTime, setChangeTime] = useState();
    const [movex, setMovex] = useState();
    const [movey, setMovey] = useState();
    const [moveup, setmoveup] = useState(false);

    window.addEventListener('mousemove', (element) => {
        if (moveup) {
            setMovex(element.clientX);
            setMovey(element.clientY);
        } else {
            setMovex(movex);
            setMovey(movey);
        }
    });

    useEffect(() => {
        const news = new Date();
        const time = news.getHours();
        console.log(time);
        if (time >= 12 && time <= 19) {
            setChangeTime('Good afternoon 🌇');
        } else if (time >= 19 || time <= 5) {
            setChangeTime('Good evening  🌙️');
        } else {
            setChangeTime('Good morning  ☀️');
        }
    }, []);

    return (
        <div
            style={{ top: movey + 'px', left: movex + 'px' }}
            className={cx('widget-container')}
            onMouseUp={() => setmoveup(false)}
            onMouseDown={() => setmoveup(true)}
        >
            <div className={cx('container-w')}>
                <div className={cx('widget-header')}>
                    <p className={cx('text')}>{changeTime}</p>
                    <p className={cx('text')}>{date}</p>
                </div>
                <p className={cx('text-wrap')}>{Monthandday}</p>
            </div>
            <p className={cx('text-footer')}>
                "You learn more from failure than from success. Don't let it stop you. Failure builds character.""
            </p>
        </div>
    );
}

export default Boxdate;
