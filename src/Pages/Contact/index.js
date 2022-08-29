import ContactWrap from './contactWrap/contactWrap';
import styles from './contact.module.scss';
import classNames from 'classnames/bind';
import Footer from './footerWrap';
import Button from '~/components/Button';
// import { useEffect } from 'react';
const cx = classNames.bind(styles);

function Contact() {
    document.body.style.height = '100vh';
    return (
        <>
            <div className={cx('wrap')}>
                <section className={cx('section')}>
                    <div className={cx('section-content')}>
                        <p>Send us a postcard, pop in for an oat milk flat white or slide into our DMs.</p>
                        <p>All the info you need is below…</p>
                        <ContactWrap />
                    </div>
                    <Footer />
                </section>
            </div>
            <Button textbox>Get in touch</Button>
        </>
    );
}
export default Contact;
