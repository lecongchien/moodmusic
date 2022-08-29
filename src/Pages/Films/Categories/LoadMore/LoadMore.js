import styles from './LoadMore.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function LoadMore( {loadMore}) {
    const showMoreItems = () => {
        loadMore((e) => e + 10)
    }
    return (
        <button className={cx('load-more')} onClick={showMoreItems}>
            Load more films
        </button>
    );
}

export default LoadMore;
