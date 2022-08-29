import styles from './Controls.module.scss';
import classNames from 'classnames/bind';
import svg from '~/assets/svg';
const cx = classNames.bind(styles);

function Controls({ pause, setPause, skipsong, lofi, currentSongIndex }) {
    return (
        <div className={cx('content')}>
            <div className={cx('ant-row')}>
                <div className={cx('wrapper')}>
                    {!pause ? (
                        <p className={cx('white')}>Design by - CH 2022 ©</p>
                    ) : (
                        <>
                            <p className={cx('white')}>Music by -</p>
                            <img
                                className={cx('hoverlabel')}
                                src={lofi[currentSongIndex].image}
                                alt={lofi[currentSongIndex].name}
                            />
                        </>
                    )}
                </div>
            </div>
            <button className={cx('prev-btn')} onClick={() => skipsong(false)}>
                <img src={svg.left} alt="left" />
            </button>
            <button className={cx('pause')} onClick={() => setPause(!pause)}>
                {pause ? (
                    <img className={cx('pause_stop')} src={svg.pause} alt="pause" />
                ) : (
                    <img className={cx('pause_stop')} src={svg.stopPause} alt="stop=pause" />
                )}
            </button>
            <button className={cx('next-btn')} onClick={() => skipsong()}>
                <img src={svg.right} alt="right" />
            </button>
        </div>
    );
}

export default Controls;
