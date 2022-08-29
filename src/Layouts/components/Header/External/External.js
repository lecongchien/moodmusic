import styles from './external.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import React from 'react';
const cx = classNames.bind(styles);

function External({ theme }) {
    return (
        <div className={cx(theme)}>
            <Button blackLink href="/">
                Go to Brother Music
            </Button>
        </div>
    );
}

export default External;
