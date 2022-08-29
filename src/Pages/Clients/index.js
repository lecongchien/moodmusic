import { useState, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

//scss
import classNames from 'classnames/bind';
import styles from './Client.module.scss';
import './ClientScroll.scss';
//
import Datatext from './Data/Datatext';
import ListText from './ListData/ListData';
import ListImage from './Data/DataImg';
import ListImages from './ListData/ListImage';

const cx = classNames.bind(styles);

function Clients() {
    const [close, setClose] = useState(true);
    if (close) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    useEffect(() => {
        Scrollbar.init(document.querySelector('#clients-popup-scroll'), { damping: 0.03 });
    }, []);

    return (
        <>
            {close && (
                <>
                <div className={cx('popup-close-visible')} onClick={() => setClose(!close)}>Close</div>
                    <div id="clients-popup-scroll" className={cx('clients-popup-scroll')}>
                        <div className={cx('scroll-content')}>
                            <div className={cx('popup-close')} onClick={() => setClose(!close)}></div>
                            <div id="clients" className={cx('clients-popup-content')}>
                                <ul id="scrollImage" className={cx('clients-list-img')}>
                                    <ListImages PrintTheList={ListImage} />
                                </ul>
                                <ul className={cx('clients-list-text')}>
                                    <ListText PrintTheList={Datatext} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Clients;
