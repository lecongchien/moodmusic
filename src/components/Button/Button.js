import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Button({ to, href, NaL, blackLink = false, whileLink = false, hometext = false, textbox, ...pastProps }) {
    let Component = 'div';
    const props = {
        ...pastProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    } else if (NaL) {
        props.to = NaL;
        Component = NavLink;
    }

    const className = cx('', {
        blackLink,
        whileLink,
        textbox,
        hometext,
    });
    return <Component className={className} {...props}></Component>;
}

export default Button;
