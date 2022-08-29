import Button from '~/components/Button';
import styles from './footerWrap.module.scss';
import logo1 from '~/assets/logo/logo-grey.png';
import logo2 from '~/assets/logo/Primary.png';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Footer({ categories = false, footerhome = false }) {
    const className = cx('footer', {
        categories,
        footerhome,
    });

    return (
        <div className={className}>
            <div className={cx('footer_st')}>
                <Button to="#">
                    <img className={cx('link-logo-1')} src={logo1} alt="uh" />
                </Button>
                <Button to="#">
                    <img className={cx('link-logo-2')} src={logo2} alt="uh" />
                </Button>
            </div>
            <div className={cx('contact-col-1')}>
                <ul>
                    <li>
                        <Button href="/">info@brotherfilmco.com</Button>
                    </li>
                    <li>
                        <Button href="/">+44 (0)203 488 2563</Button>
                    </li>
                    <br />
                </ul>
            </div>
            <div className={cx('contact-col-1')}>
                <ul>
                    <li>
                        <Button href="/">Privacy</Button>
                    </li>
                    <li>
                        <Button href="/">Cookies</Button>
                    </li>
                    <li>
                        <Button href="/">T&Cs</Button>
                    </li>
                </ul>
            </div>
            <div className={cx('contact-col-1')}>
                <ul>
                    <li>
                        <Button href="/">Instagram</Button>
                    </li>
                    <li>
                        <Button href="/">Vimeo</Button>
                    </li>
                    <li>
                        <Button href="/">Office Stereo</Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
