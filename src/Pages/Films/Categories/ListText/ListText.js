import classNames from 'classnames/bind';
import styles from '../Categories.module.scss';

const cx = classNames.bind(styles);

function Listtext({ desc }) {
    return (
        <div className={cx('films-list-title')}>
           <div className={cx('js-marquee-wrapper')}>
                <div className={cx('js-marquee')}>{desc}</div>
            </div>
        </div>
    );
}

export default Listtext;
