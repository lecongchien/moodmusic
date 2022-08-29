import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLeftAndUpRightToCenter, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
//
import Button from '~/components/Button';
import Dates from '../Date/Date';
//logo
import facebook from '~/assets/logo/facebook.svg';
import instagram from '~/assets/logo/instagram.svg';
import tiktok from '~/assets/logo/tiktok.svg';
//scss
import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';
const cx = classNames.bind(styles);

function NavMenu({ fullScreen, setFullScreen, full, nextSongIndex }) {
    return (
        <div className={cx('top-ui')}>
            <div className={cx('visitors-counter')}>
                <p>listening now {nextSongIndex + 1}</p>
                <p className={cx('cricle-red')}></p>
            </div>
            <Dates />
            <div className={cx('vertical')}>
                <div className={cx('horizontal')}>
                    <Tippy content="fullScreen" placement="bottom" className={cx('box-title')}>
                        <button
                            className={cx('full-screen')}
                            onClick={full}
                            onMouseUp={() => setFullScreen(!fullScreen)}
                        >
                            {fullScreen ? (
                                <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
                            ) : (
                                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                            )}
                        </button>
                    </Tippy>
                    <Tippy content="facebook" placement="bottom" className={cx('box-title')}>
                        <button className={cx('link-facebook')}>
                            <Button
                                className={cx('facebook')}
                                href="https://www.facebook.com/profile.php?id=100076782010715"
                            >
                                <img src={facebook} alt="icon-fb"></img>
                            </Button>
                        </button>
                    </Tippy>
                    <Tippy content="instagram" placement="bottom" className={cx('box-title')}>
                        <button className={cx('link-instagram')}>
                            <Button className={cx('instagram')} href="https://www.instagram.com/ch.iennnn/">
                                <img src={instagram} alt="icon-instagram"></img>
                            </Button>
                        </button>
                    </Tippy>
                    <Tippy content="Tiktok" placement="bottom" className={cx('box-title')}>
                        <button className={cx('link-tiktok')}>
                            <Button className={cx('tiktok')} href="https://tiktok.com/@chienle247">
                                <img src={tiktok} alt="icon-tiktok"></img>
                            </Button>
                        </button>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default NavMenu;
