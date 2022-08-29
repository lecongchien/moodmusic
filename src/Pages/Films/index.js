import Menu from './Menu';
import Categories from './Categories';
import styles from './Film.module.scss';
import classNames from 'classnames/bind';
import menu from './data';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
// const allMenu = ['ALL', ...new Set(menu.map((item) => item.category))];

function Films({ el }) {
    const [category, setCategory] = useState(menu);
    // const [menuTitle] = useState(allMenu);
    useEffect(() => {
        if (el === 'ALL') {
            setCategory(menu);
        } else {
            const newItems = menu.filter((item) => item.category === el);
            setCategory(newItems);
        }
    }, [el]);

    return (
        <div className={cx('ajax-wrap')}>
            <Button textbox>we make films</Button>
            <Menu />
            <Categories menuitems={category} />
        </div>
    );
}

export default Films;
