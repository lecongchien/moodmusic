import Header from '../components/Header';
import Navbar from '../components/Nav/Navbar';
// import styles from './DefaultLayout.module.scss';
// import classNames from 'classnames/bind';
// import Cursor from '~/components/Cursor';
// const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            {children}
            {/* <Cursor /> */}
        </>
    );
}

export default DefaultLayout;
