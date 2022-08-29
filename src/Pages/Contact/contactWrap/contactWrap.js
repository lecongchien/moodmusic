import Button from '~/components/Button';
import styles from './contactWrap.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ContactWrap() {
    const contact = [
        {
            title: 'Visiting',
            infomation1: 'Brother Film Co LLP',
            infomation2: 'Unit 307',
            infomation3: 'Peckham Levels',
            infomation4: '95A Rye Lane',
            infomation5: 'Peckham',
            infomation6: 'London',
            infomation7: 'SE15 4ST',
        },
        {
            title: 'For Post',
            infomation1: 'Brother Film Co LLP',
            infomation2: 'Unit 307',
            infomation3: 'Peckham Levels',
            infomation4: 'Cerise Road',
            infomation5: 'Peckham',
            infomation6: 'London',
            infomation7: 'SE15 5HQ',
        },
    ];
    return (
        <div className={cx('contact-wrap')}>
            <div className={cx('contact-col')}>
                <h3 className={cx('contact-title')}>Get in touch</h3>
                <ul>
                    <li>
                        <Button href="/">info@brotherfilmco.com</Button>
                    </li>
                    <li>
                        <Button href="/">+44 (0)203 488 2563</Button>
                    </li>
                    <br />
                </ul>
            </div>
            {contact.map((result, index) => (
                <div key={index} className={cx('contact-col')}>
                    <>
                        <h3 className={cx('contact-title')}>{result.title}</h3>
                        <ul>
                            <li>{result.infomation1}</li>
                            <li>{result.infomation2}</li>
                            <li>{result.infomation3}</li>
                            <li>{result.infomation4}</li>
                            <li>{result.infomation5}</li>
                            <li>{result.infomation6}</li>
                            <li>{result.infomation7}</li>
                        </ul>
                    </>
                </div>
            ))}
        </div>
    );
}

export default ContactWrap;
