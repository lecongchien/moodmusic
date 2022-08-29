import styles from './text.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Text({ textline = false, alphabet = false, homesectiontitle = false, textfooter = false, menu, ...prop }) {
    const props = {
        ...prop,
    };
    const textliner = cx('', {
        textline,
        textfooter,
    });

    const alphabetr = cx('', {
        alphabet,
    });

    const title = cx('', {
        homesectiontitle,
    });
    return (
        <div className={textliner} {...props}>
            {menu}
            <div className={title}>
                <div className={alphabetr}>
                    <div>
                        <span>{menu}</span>
                    </div>
                </div>
                <div className={alphabetr}>
                    <div>
                        <span>{menu}</span>
                    </div>
                </div>
                <div className={alphabetr}>
                    <div>
                        <span>{menu}</span>
                    </div>
                </div>
                <div className={alphabetr}>
                    <div>
                        <span>{menu}</span>
                    </div>
                </div>
                <div className={alphabetr}>
                    <div>
                        <span>{menu}</span>
                    </div>
                </div>
                <div className={alphabetr}>
                    <div>
                        <span>{menu}</span>
                    </div>
                </div>
                <div className={alphabetr}>
                    <div>
                        <span>{menu}</span>
                    </div>
                </div>
                <div className={alphabetr}>
                    <div>
                        <span>{menu}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Text;
