import styles from './Templates.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Template() {
    const menu = [
        {
            id: 1,
            text: 'chill',
            image: require('~/assets/svg/svgchill.svg').default,
        },
        {
            id: 2,
            text: 'Focus',
            image: require('~/assets/svg/svgfocus.svg').default,
        },
        {
            id: 3,
            text: 'sleep',
            image: require('~/assets/svg/svgsleep.svg').default,
        },
    ];
    return (
        <div className={cx('templates-panel')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('templates-header')}>
                        <h4>Playlists</h4>
                    </div>
                    <div className={cx('playlists-template')}>
                        {menu.map((element) => {
                            return <img key={element.id} src={element.image} alt={element.text} />;
                        })}
                    </div>
                    <div className={cx('templates')}>
                        <h4>Templates</h4>
                    </div>
                    <p className={cx('st')}>You don’t have any template saved.</p>
                </div>
                <div className={cx('premium-banner')}>
                    <h4 className={cx('center')}>
                        Get <span className={cx('accent')}>Premium </span>
                        to use our playlists and to save templates
                    </h4>
                    <button className={cx('premium-preminum')}>Go to Pricing</button>
                </div>
            </div>
        </div>
    );
}

export default Template;
