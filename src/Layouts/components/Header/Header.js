import Button from '~/components/Button/Button';
import config from '~/config';
import Splits from './Splitting';
import External from './External';
import logo1 from '~/assets/logo/logo-grey.png';
//scss
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('header-left')}>
                <div className={cx('header-logo')}>
                    <Button to={config.routes.brotherfilmco}>
                        <div className={cx('logo-anim')}>
                            <img src={logo1} alt='logo'/>
                        </div>
                        <Splits />
                    </Button>
                </div>
            </div>
            <div className={cx('header-right')}>
                <External />
            </div>
        </header>
    );
}

export default Header;
