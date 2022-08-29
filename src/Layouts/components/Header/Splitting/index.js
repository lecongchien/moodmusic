import { useEffect, useRef } from 'react';
import styles from './Splitting.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Splits() {
    const userText = [
        {
            textLitle: 'brother brother brother brother',
        },
    ];

    const config = {
        current: 0,
        target: 0,
        ease: 0.035,
    };

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }
    const scrollBrother = useRef();

    useEffect(() => {
        requestAnimationFrame(() => Scrolling());
        // eslint-disable-next-line
    }, []);

    const Scrolling = () => {
        try {
            config.target = window.scrollY;
            config.current = lerp(config.current, config.target, config.ease);

            scrollBrother.current.style.transform = `perspective(400px) rotateX(-15deg) rotate(-22deg) rotateY(${
                config.current * 0.09
            }deg)`;

            requestAnimationFrame(() => Scrolling());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('logo-box')}>
            <div className={cx('logo-animation')}>
                {userText.map((result, index) => (
                    <div
                        ref={scrollBrother}
                        className={cx('circle')}
                        key={index}
                        dangerouslySetInnerHTML={{
                            __html: result.textLitle
                                .split('')
                                .map(
                                    (char, i) =>
                                        `<span style= "--char-index: ${i}"><p> 
                                    ${char}</p>
                                </span>`,
                                )
                                .join(''),
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
export default Splits;
