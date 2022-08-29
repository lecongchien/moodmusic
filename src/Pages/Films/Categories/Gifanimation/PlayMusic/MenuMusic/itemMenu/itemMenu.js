import Tippys from '@tippyjs/react';
// import tippy, { followCursor } from 'tippy.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './itemMenu.module.scss';
import classNames from 'classnames/bind';
import HeaderBox from './HeaderBox';
import { useEffect, useRef, useState } from 'react';
import Template from './Template';
const cx = classNames.bind(styles);

function ItemMenu({ refvolumn, volumn, max, categori, filterItems, changecolor }) {
    const [hidenmixer, setHidenmixer] = useState(false);
    const [handleTemplates, sethandleTemplates] = useState(false);
    const opacity = useRef();
    // console.log(hidenmixer);
    const info = [
        { id: 1, title: 'Mixer', icon: <FontAwesomeIcon icon={faSliders} /> },
        { id: 2, title: 'Templates', icon: <FontAwesomeIcon icon={faSquare} /> },
    ];
    // setHidenmixer(info);
    useEffect(() => {
        if (hidenmixer) {
            opacity.current.style.opacity = 1;
            opacity.current.style.visibility = 'visible';
        } else {
            opacity.current.style.opacity = 0;
            opacity.current.style.visibility = 'hidden';
        }
    });

    return (
        <>
            <HeaderBox
                refvolumn={refvolumn}
                volumn={volumn}
                max={max}
                categori={categori}
                filterItems={filterItems}
                changecolor={changecolor}
                opacity={opacity}
            />
            {handleTemplates && <Template />}
            <div className={cx('lateral-menu')}>
                {info.map((element, index) => {
                    return (
                        <div
                            key={index}
                            className={cx('logo-item')}
                            onClick={() => {
                                if (element.id === 1) {
                                    setHidenmixer(!hidenmixer);
                                    sethandleTemplates(false);
                                } else if (element.id === 2) {
                                    sethandleTemplates(!handleTemplates);
                                    setHidenmixer(false);
                                }
                            }}
                        >
                            <Tippys content={<p className={cx('label')}>{element.title}</p>} placement="left">
                                <div className={cx('svg')}>{element.icon}</div>
                            </Tippys>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ItemMenu;
