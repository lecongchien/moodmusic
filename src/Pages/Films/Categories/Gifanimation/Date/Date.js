import Tippys from '@tippyjs/react';
import styles from './Date.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Boxdate from './Boxdate';
const cx = classNames.bind(styles);

function Dates() {
    const [date, setDate] = useState();
    const [monthandday, setMonthandDay] = useState();
    const [visible, setVisible] = useState(false);
    //

    useEffect(() => {
        const week = {
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
            0: 'Sunday',
        };

        const months = {
            0: 'January',
            1: 'Feburary',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December',
        };

        const hoursSeconds = new Date();
        const options = hoursSeconds >= 12 ? 'PM' : 'AM';
        const Monthanđay =
            "it's" +
            ' ' +
            week[hoursSeconds.getDay()] +
            ', ' +
            months[hoursSeconds.getMonth()] +
            '' +
            ' ' +
            hoursSeconds.getDate();
        const todaysDate =
            hoursSeconds.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3') + ' ' + options;
        //
        setMonthandDay(Monthanđay);
        setDate(todaysDate);
    }, []);

    return (
        <>
            <Tippys content="Click" placement="bottom">
                <div className={cx('box-times')} onClick={() => setVisible(!visible)}>
                    {date}
                </div>
            </Tippys>
            {visible && <Boxdate date={date} Monthandday={monthandday} />}
        </>
    );
}

export default Dates;
