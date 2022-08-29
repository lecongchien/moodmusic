import Scrollbar from 'smooth-scrollbar';
import classNames from 'classnames/bind';
//
import Footer from '~/Pages/Contact/footerWrap/footerWrap';
import ListText from './ListText';
import LoadMore from './LoadMore';
import styles from './Categories.module.scss';
import './scroll_wrap.scss';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import Gifanimation from './Gifanimation/Gifanimation';

const cx = classNames.bind(styles);

function Categories({ menuitems }) {
    const [loadMore, setLoadMore] = useState(12);
    const [changeGif, setChangeGif] = useState('');
    const [gifVideo, getGifVideo] = useState(true);

    // !gifVideo && (document.body.style.overflow = 'hidden');

    useEffect(() => {
        Scrollbar.init(document.querySelector('#scroll_wrap'), { damping: 0.075 });
    }, []);

    return (
        <>
            {!gifVideo && <Gifanimation changegif={changeGif} exit={getGifVideo} />}

            {gifVideo && (
                <div id="scroll_wrap" className={cx('scroll-wrap')}>
                    <div className={cx('films-list')}>
                        <div className={cx('container')}>
                            <div className={cx('films-text')}>
                                <p>
                                    Here we go. Sit back and have a browse through some of our favourite video projects,
                                    or narrow it down by category.
                                </p>
                            </div>
                            <div className={cx('row')}>
                                {menuitems.slice(0, loadMore).map((menuitem) => {
                                    const { id, title, img, desc } = menuitem;
                                    return (
                                        <div key={id} className={cx('films-list-item-wrap')}>
                                            <div className={cx('films-list-item')}>
                                                <div className={cx('films-list-item-img')}>
                                                    <img
                                                        src={img}
                                                        alt={title}
                                                        onMouseDown={() => setChangeGif(img)}
                                                        onClick={() => getGifVideo(!gifVideo)}
                                                    />
                                                </div>
                                                <Button className={cx('films-list-text')}>
                                                    <ListText desc={desc} />
                                                    <ListText desc={desc} />
                                                    <ListText desc={desc} />
                                                    <ListText desc={desc} />
                                                </Button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <LoadMore loadMore={setLoadMore} />
                        </div>
                    </div>
                    <Footer categories />
                </div>
            )}
        </>
    );
}

export default Categories;
