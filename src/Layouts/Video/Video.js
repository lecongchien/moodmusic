import styles from './Video.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Video() {
    return (
        <div className={cx('home-page-video')}>
            <div className={cx('video-list-text')}>
                <div className={cx('video_list_title')}>1222</div>;
            </div>
        </div>
    );
}

export default Video;
