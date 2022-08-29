// import Scrollbar from 'smooth-scrollbar';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import './home-wrap.scss';
import useWindow from '~/Hook/index';
import HomeSectionWrap from './homeSectionWrap';
import sandro from '~/assets/image/sandro.gif';
import ListText from '~/Pages/Films/Categories/ListText';
import Text from '~/components/text';
import menu from '~/Pages/Films/data';
import FooterWrap from '~/Pages/Contact/footerWrap';

const cx = classNames.bind(styles);

function Home() {
    const side = useWindow();
    const scrollHome = useRef();
    const opacity = useRef();
    const HorizontalText1 = useRef();
    const HorizontalText2 = useRef();
    const HorizontalText3 = useRef();
    const HorizontalText4 = useRef();
    const sectionbox = useRef();
    const sectionboxwrap = useRef();
    const services = useRef();
    const [delayscrollText, setDelayscrollText] = useState();
    const [scrolltextdown, setScrolltextdown] = useState();
    const nameMenu = [
        {
            id: 1,
            text: 'chien',
            title:
                'Le Cong Chien Le Cong Chien Le Cong Chien Le Cong Chien Le Cong Chien Le Cong' +
                'Le Cong Chien Le Cong Chien Le Cong Chien Le Cong Chien' +
                'Le Cong Chien Le Cong Chien Le Cong Chien Le Cong Chien Le Cong Chien Le Cong Chien' +
                'Le Cong Chien Le Cong Chien Le Cong Chien Le Cong Chien',
            image: 'https://i.pinimg.com/originals/3a/db/27/3adb27eadc475af738de43562d3d6ec3.gif',
        },
    ];

    useEffect(() => {
        document.body.style.height = `${scrollHome.current.getBoundingClientRect().height}px`;
    }, [side.height]);

    const config = {
        current: 0,
        target: 0,
        ease: 0.075,
    };

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }
    useEffect(() => {
        requestAnimationFrame(() => Scroll());
        // eslint-disable-next-line
    }, []);

    function Scroll() {
        try {
            config.target = window.scrollY;
            config.current = lerp(config.current, config.target, config.ease);
            const changeNumber = `${(1 - config.current / 800).toFixed(4)}`;
            const handlecurrent = 500 + config.current * 1.2;
            const handlecurrentshap = 28 + config.current * 2.5;
            if (changeNumber <= 0) {
                opacity.current.style.opacity = 0;
            } else {
                opacity.current.style.opacity = changeNumber;
            }
            //text
            HorizontalText1.current.style.transform = `translateX(${(config.current / 2).toFixed(2)}px)`;
            HorizontalText2.current.style.transform = `translateX(${(config.current / 2).toFixed(2)}px)`;
            HorizontalText3.current.style.transform = `translateX(${(config.current / 2).toFixed(2)}px)`;
            HorizontalText4.current.style.transform = `translateX(${(config.current / 2).toFixed(2)}px)`;
            //textup
            if (handlecurrent >= 700 && handlecurrent <= 1030) {
                sectionbox.current.style.top = `${handlecurrent}px`;
                setDelayscrollText(sectionbox.current.style.top);
            } else if (handlecurrent === 1030) {
                sectionbox.current.style.top = delayscrollText;
            }
            //textdown
            if (handlecurrentshap <= 3023) {
                sectionboxwrap.current.style.bottom = `${handlecurrentshap.toFixed(3)}px`;
                setScrolltextdown(sectionboxwrap.current.style.bottom);
            } else {
                sectionboxwrap.current.style.bottom = scrolltextdown;
            }

            scrollHome.current.style.transform = `translateY(-${config.current.toFixed(2)}px)`;
            requestAnimationFrame(() => Scroll());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div ref={scrollHome} className={cx('home-wrap')}>
                <div className={cx('home-music')}>
                    <div className={cx('container')}>
                        <div className={cx('home-music-text')}>
                            <p>Production music that doesn’t really sound like production music.</p>
                        </div>
                        <Button whileLink>Go to Brother Music</Button>
                        <div className={cx('row')}>
                            {nameMenu.map((element, index) => {
                                return (
                                    <div key={element.id} className={cx('films-list-item-wrap')}>
                                        <div className={cx('films-list-item')}>
                                            <div className={cx('films-list-item-img')}>
                                                <img src={element.image} alt={element.text} />
                                            </div>
                                            <Button className={cx('films-list-text')}>
                                                <div className={cx('films-list-title')}>
                                                    <div className={cx('js-marquee-wrapper')}>
                                                        <div ref={HorizontalText1} className={cx('js-marquee')}>
                                                            {element.title}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('films-list-title')}>
                                                    <div className={cx('js-marquee-wrapper')}>
                                                        <div ref={HorizontalText2} className={cx('js-marquee')}>
                                                            {element.title}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('films-list-title')}>
                                                    <div className={cx('js-marquee-wrapper')}>
                                                        <div ref={HorizontalText3} className={cx('js-marquee')}>
                                                            {element.title}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('films-list-title')}>
                                                    <div className={cx('js-marquee-wrapper')}>
                                                        <div ref={HorizontalText4} className={cx('js-marquee')}>
                                                            {element.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Button>
                                        </div>
                                        {/* <div className={cx('text-ch')}>ch.</div> */}
                                    </div>
                                );
                            })}
                        </div>
                        <HomeSectionWrap sectionbox={sectionbox} sectionboxwrap={sectionboxwrap} />
                        <div className={cx('section-text')}>
                            It was like being in the eye of a hurricane. You’d wake up in a concert and think, Wow, how
                            did I get here?
                        </div>
                        <div className={cx('content-image')}>
                            <img src={sandro} alt="sandro" />
                        </div>
                        <div className={cx('row')}>
                            {menu.slice(0, 5).map((element, index) => {
                                return (
                                    <div ref={services} key={index} id={element.text}>
                                        <div className={cx('films-list-item-wrap')}>
                                            <div className={cx('films-list-item')}>
                                                <div className={cx('films-list-item-img-film')}>
                                                    <img src={element.img} alt="" />
                                                    <Text homesectiontitle textline alphabet menu={element.title} />
                                                </div>
                                                <Button className={cx('films-list-text')}>
                                                    <ListText />
                                                    <ListText />
                                                    <ListText />
                                                    <ListText />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <Button to={'/films'}>
                            <Text homesectiontitle textfooter alphabet menu={'view all films'} />
                        </Button>
                    </div>
                    <FooterWrap footerhome />
                </div>
            </div>
            <div ref={opacity} className={cx('home-change-color')}></div>
        </>
    );
}

export default Home;
