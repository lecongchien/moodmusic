import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import Clients from '~/Pages/Clients';
import { Fragment, useState } from 'react';

const cx = classNames.bind(styles);

function Navbar() {
    const [displayClient, setDispalyClient] = useState(false);
    
    return (
        <Fragment>
            {displayClient && <Clients />}
            <nav className={cx('side-nav')}>
                <ul className={cx('side-nav-menu')}>
                    <li className={cx('menu-item')}>
                        <Button className={(nav) => cx('item', { active: nav.isActive })} NaL={'/contact/'}>
                            contact
                        </Button>
                    </li>
                    <li className={cx('menu-item')}>
                        <Button
                            className={(nav) => cx('item', { activelv2: nav.isActive })}
                            NaL={'/#clients'}
                            onClick={(e) => {
                                e.preventDefault();
                                setDispalyClient(true);
                            }}
                            onMouseDown={() => {
                                setDispalyClient(false);
                            }}
                        >
                            clients
                        </Button>
                    </li>
                    <li className={cx('menu-item')}>
                        <Button className={(nav) => cx('item', { active: nav.isActive })} NaL={'/films/'}>
                            films
                        </Button>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
}

export default Navbar;
