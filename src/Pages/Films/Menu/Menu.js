import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const linkMenu = [
    {
        link: '/films',
        title: 'ALL',
    },
    {
        link: '/films-category/lofiAnimeGifs',
        title: 'Lofi Anime Gifs'
    },
    {
        link: '/films-category/trees',
        title: 'Trees',
    },
    {
        link: '/films-category/rain',
        title: 'Rain',
    },
    {
        link: '/films-category/moonlight',
        title: 'Moonlight'
    },
    {
        link: '/films-category/flowersAndsunset',
        title: 'Flowers and sunset',
    }
]

function Menu() {
    return (
        <div className={cx('films-filter-wrap')}>
            <ul className={cx('films-filter-nav')}>
                {linkMenu.map((item, index) => {
                    return (
                    <li key={index}>
                        <Button className={(menu) => cx('', {active: menu.isActive})} NaL={item.link}>{item.title}</Button>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Menu;
